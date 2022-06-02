import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import AddOrder from "../components/AddOrder";
import FilterOrders from "../components/FilterOrders";
import Table from "../components/Table";

const Orders = () => {
	const [ordersWithProductsAndCustomers, setOrdersWithProductsAndCustomers] =
		useState([]);
	const [filteredOrders, setFilteredOrders] = useState([]);
	const {
		orders,
		setOrders,
		customers,
		products,
	} = useOutletContext();

	useEffect(() => {
		//combining orders with customers with products
		let newOrdersWithProductsAndCustomers =
			orders.map((order) => {
				const customer = customers.find(
					(customer) => customer.id === order.customerId
          // need to have as ICustomer to tell typescript that I know there has to be a customer, dont worry
				);
				const itemsWithProducts = order.items.map((item) => {
					const product = products.find(
						(product) => product.id === item.productId
					) ;
					return {
						...item,
						product,
					};
				});
				return {
					...order,
					customer,
					items: itemsWithProducts,
				};
			});

		setOrdersWithProductsAndCustomers(newOrdersWithProductsAndCustomers);
	}, [orders, customers, products]);

	return (
		<div>
			<FilterOrders
				ordersWithProductsAndCustomers={ordersWithProductsAndCustomers}
				setFilteredOrders={setFilteredOrders}
			/>
			<AddOrder
				customers={customers}
				products={products}
				setOrders={setOrders}
			/>
			<Table type="orders" content={filteredOrders} />
		</div>
	);
};

export default Orders;
