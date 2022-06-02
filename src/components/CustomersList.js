import React from "react";
import { useOutletContext } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import NavigationIcon from "@mui/icons-material/Navigation";

function CustomersList() {
	const {
		customers,
		setCustomers,
	}= useOutletContext();

	return (
		<div>
			<table id="CustomersList_table">
				<tr>
					<th>Customers List</th>
				</tr>
				{customers.map((customer) => (
					<tr className="CustomersList_customer_tr">
						<div className="CustomersList_customer_tr_div">
							<div>
								<strong>
									{customer.firstName} {customer.lastName}
								</strong>
							</div>
							<div className="CustomersList_customer_tr_div_edit_delete">
								<button>Edit</button>
								<button>Delete</button>
							</div>
						</div>
						<div className="CustomersList_customer_tr_div">
							{customer.cellPhone}
							<LocalPhoneIcon />
						</div>
						<div className="CustomersList_customer_tr_div">
							{customer.homeAddress}
							<NavigationIcon />
						</div>
					</tr>
				))}
			</table>
		</div>
	);
}

export default CustomersList;
