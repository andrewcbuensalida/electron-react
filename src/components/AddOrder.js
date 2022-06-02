import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import "./AddOrder.css";
import Checkbox from "./Checkbox";
import BasicDateTimePicker from "./DateTimePicker";
import Table from "./Table";
import Button from "./Button";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
	maxHeight: "80vh",
	overflowY: "scroll",
};

function AddOrder({
	customers,
	products,
	setOrders,
}) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [isPending, setIsPending] = useState(false);
	const [isPaid, setIsPaid] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [date, setDate] = useState(new Date());
	const [deliveryAddress, setDeliveryAddress] = useState("");
	const [items, setItems] = useState([]);
    
	function changeQuantity(productId, value) {
		//check if item is already in basket
		if (items.some((item) => item.productId === productId)) {
			const itemsAfterChange = items.map((item) => {
				//found the item, then add value to quantity
				if (item.productId === productId) {
					return {
						...item,
						quantity: item.quantity + value,
					};
					//just return other items
				} else {
					return item;
				}
			});
			//removing zero quantity items
			const removedZeroQuantityItems = itemsAfterChange.filter(
				(item) => item.quantity > 0
			);
			setItems(removedZeroQuantityItems);
			//if item not in basket yet and value > 0, add item to basket
		} else if (value > 0) {
			setItems((previousItems) => [
				...previousItems,
				{ productId, quantity: value },
			]);
			//if item not in basket and value <= 0
		} else if (value <= 0) {
			return;
		}
	}
	async function submitOrder() {
        
        
        handleClose()
    }
	return (
		<div>
			<div id="AddOrder_div" onClick={handleOpen}>
				<AddCircleIcon />
				Add Order
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<form className="AddOrder_form" action="">
						<h4>New Order</h4>
						<div className="AddOrder_input_div">
							<label htmlFor="">First Name:</label>
							<input
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								type="text"
								placeholder=""
							/>
						</div>
						<div className="AddOrder_input_div">
							<label htmlFor="">Last Name:</label>
							<input
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								type="text"
								placeholder=""
							/>
						</div>
						<div className="AddOrder_input_div">
							<label htmlFor="">Pending:</label>
							<label htmlFor="">No</label>
							<Checkbox
								isToggled={isPending}
								setIsToggled={setIsPending}
							/>
							<label htmlFor="">Yes</label>
						</div>
						<div className="AddOrder_input_div">
							<label htmlFor="">Paid:</label>
							<label htmlFor="">No</label>
							<Checkbox
								isToggled={isPaid}
								setIsToggled={setIsPaid}
							/>
							<label htmlFor="">Yes</label>
						</div>
						<div className="AddOrder_input_div">
							<label htmlFor="">Delivery Time:</label>
							<BasicDateTimePicker
								date={date}
								setDate={setDate}
							/>
						</div>
						<div className="AddOrder_input_div">
							<label htmlFor="">Delivery Address:</label>

							<input
								value={deliveryAddress}
								onChange={(e) =>
									setDeliveryAddress(e.target.value)
								}
								type="text"
								placeholder=""
							/>
						</div>
						<div className="AddOrder_input_div">
							<label htmlFor="">Items:</label>
						</div>
						<Table
							changeQuantity={changeQuantity}
							type="addOrderProducts"
							content={products}
							items={items}
						/>
						<div className="AddOrder_cancel_submit">
							<Button onClick={handleClose} content="Cancel" />
							<Button onClick={submitOrder} content="Submit" />
						</div>
					</form>
				</Box>
			</Modal>
		</div>
	);
}

export default AddOrder;
