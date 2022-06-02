import React from "react";
import { useOutletContext } from "react-router-dom";
import AddCustomer from "../components/AddCustomer";
import CustomerSearch from "../components/CustomerSearch";
import CustomersList from "../components/CustomersList";
import Table from "../components/Table";

//could do it this way or declaring the type next to the arguments below


function Customers() {
	const { customers, setProducts } = useOutletContext();

	return (
		<div>
			<CustomerSearch />
			<AddCustomer />
			<Table type="customers" content={customers} />
		</div>
	);
}

export default Customers;
