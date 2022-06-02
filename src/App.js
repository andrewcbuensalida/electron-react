import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Admin from "./Admin";
import Client from "./Client";
import Orders from "./routes/Orders";
import Products from "./routes/Products";
import Customers from "./routes/Customers";

function App() {
	return (
		<div className="App">
			<header>Yummy Bites</header>
			<Routes>
				<Route path="/admin" element={<Admin />}>
					<Route path="" element={<Navigate to="/admin/orders" />} />
					<Route path="orders" element={<Orders />} />
					<Route path="products" element={<Products />} />
					<Route path="customers" element={<Customers />} />
				</Route>
				<Route path="/client" element={<Client />} />
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
