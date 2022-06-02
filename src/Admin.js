import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";
import URL from "./URL";

function Admin() {
	const [customers, setCustomers] = useState([]);
	const [products, setProducts] = useState([]);
	const [orders, setOrders] = useState([]);

	//fetch all data from database
	useEffect(() => {
		const getData = async (URL) => {
			try {
				const responseRaw = await fetch(URL);
				const { ok, data } = await responseRaw.json();

				const ordersWithDateObject = data.orders.map((order) => {
					return {
						...order,
						deliveryTime: new Date(order.deliveryTime),
						dateOrdered: new Date(order.dateOrdered),
					};
				});

				// maybe should separate these calls so all wont fail if one fails
				if (ok) {
					setCustomers(data.customers);
					setProducts(data.products);
					setOrders(ordersWithDateObject);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getData(URL);
	}, []);

	return (
		<div>
			Admin
			<AdminNavbar />
			<Outlet
				context={{
					customers,
					setCustomers,
					products,
					setProducts,
					orders,
					setOrders,
				}}
			/>
		</div>
	);
}

export default Admin;
