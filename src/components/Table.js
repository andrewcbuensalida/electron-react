import React from "react";
import Button from "./Button";
import CustomerBody from "./CustomerBody";
import OrdersContent from "./OrdersContent";
import ProductBody from "./ProductBody";
import "./Table.css";

function Table(props) {
	return (
		<div>
			<table id="Table_table">
				{props.content.map((oneContent) => (
					<tr key={oneContent.id} className="Table_oneContent_tr">
						<div className="Table_oneContent_header">
							<div className="Table_oneContent_name">
								<strong>
                                    {/* if the product is in the basket, render it */}
									{props.items &&
										(props.items.find(
											(item) =>
												item.productId === oneContent.id
										)?.quantity ||
											0)}{" "}
									{props.type === "products" ||
									props.type === "addOrderProducts"
										? oneContent.name
										: props.type === "customers"
										? oneContent.firstName +
										  " " +
										  oneContent.lastName
										: oneContent.customer?.firstName +
										  " " +
										  oneContent.customer?.lastName}
								</strong>
							</div>
							{props.type === "addOrderProducts" ? (
								<div className="Table_oneContent_inc_dec">
									<Button
										onClick={() =>
											props.changeQuantity(
												oneContent.id,
												-1
											)
										}
										content="-"
									/>
									<Button
										onClick={() =>
											props.changeQuantity(
												oneContent.id,
												1
											)
										}
										content="+"
									/>
								</div>
							) : (
								<div className="Table_oneContent_edit_delete">
									<Button content="Edit" />
									<Button content="Delete" />
								</div>
							)}
						</div>
						{props.type === "products" ? (
							<ProductBody oneContent={oneContent} />
						) : props.type === "customers" ? (
							<CustomerBody oneContent={oneContent} />
						) : props.type === "addOrderProducts" ? (
							""
						) : (
							<OrdersContent oneContent={oneContent} />
						)}
					</tr>
				))}
			</table>
		</div>
	);
}

export default Table;
