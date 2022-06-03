import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
	const navigate = useNavigate();
	function handleCustomerLogin() {
		alert(`This page hasn't been created yet`);
	}
	function handleAdminLogin() {
		// some auth checking, then
		navigate("/admin");
	}
	return (
		<div>
			<div>Login as</div>
			<button
				id="Login_customerButton"
				className="Login_button"
				onClick={handleCustomerLogin}
			>
				Customer
			</button>
			<button
				id="Login_adminButton"
				className="Login_button"
				onClick={handleAdminLogin}
			>
				Admin
			</button>
		</div>
	);
}

export default Login;
