import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./AdminNavbar.css";

function AdminNavbar() {
	const { pathname } = useLocation();

	return (
		<nav className="AdminNavbar_nav">
			<Link to="/admin/customers">
				<button
					id="AdminNavbar_link_customers"
					className={`${
						pathname === "/admin/customers" &&
						"AdminNavbar_selected"
					} AdminNavbar_link`}
				>
					Customers
				</button>
			</Link>
			<Link to="/admin/products">
				<button
					id="AdminNavbar_link_products"
					className={`${
						pathname === "/admin/products" && "AdminNavbar_selected"
					} AdminNavbar_link`}
				>
					Products
				</button>
			</Link>
			<Link to="/admin/orders">
				<button
					id="AdminNavbar_link_orders"
					className={`${
						pathname === "/admin/orders" && "AdminNavbar_selected"
					} AdminNavbar_link`}
				>
					Orders
				</button>
			</Link>
		</nav>
	);
}

export default AdminNavbar;
