import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import "./FilterOrders.css";



function FilterOrders({
	ordersWithProductsAndCustomers,
	setFilteredOrders,
}) {
	const [isPending, setIsPending] = useState(false);

	useEffect(() => {
		if (isPending) {
			const newOrders = ordersWithProductsAndCustomers.filter(
				(order) =>
					order.isPending === isPending
			);
			setFilteredOrders(newOrders);
		} else {
			setFilteredOrders(ordersWithProductsAndCustomers);
		}
	}, [isPending, ordersWithProductsAndCustomers]);

	return (
		<div className="FilterOrders_container">
			<div className="FilterOrders_paid_delivered">
				<label>Show all</label>
				<Checkbox isToggled={isPending} setIsToggled={setIsPending} />
				<label>Pending</label>
			</div>
			<div id="FilterOrders_nameDiv">
				<label htmlFor="FilterOrders_name">Name:</label>
				<input
					name="FilterOrders_name"
					id="FilterOrders_name"
					type="text"
				/>
			</div>
		</div>
	);
}

export default FilterOrders;
