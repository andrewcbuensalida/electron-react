import React from "react";
import { format } from "date-fns";

import "./OrdersContent.css";

function OrdersContent({ oneContent }) {    
	return (
		<div className="OrdersContent_container">
			<div>
				<strong>Pending?</strong> {oneContent.isPending ? "Yes" : "No"}
			</div>
			<div>
				<strong>Paid?</strong> {oneContent.isPaid ? "Yes" : "No"}
			</div>
			<div>
				<strong>Date Ordered:</strong>{" "}
				{format(oneContent.dateOrdered, "MMM dd, h:mm aa")}
			</div>
			<div>
				<strong>Delivery Time:</strong>{" "}
				{format(oneContent.deliveryTime, "MMM dd, h:mm aa")}
			</div>
			<div>
				<strong>Delivery Address:</strong> {oneContent.deliveryAddress}
			</div>
			<ul>
				<strong>Items:</strong>
				{oneContent.items.map((item) => (
					<li key={item.productId} className="OrdersContent_item">
						{item.quantity + " "}
						{item.product.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default OrdersContent;
