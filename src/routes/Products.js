import React from "react";

import ProductSearch from "../components/ProductSearch";
import AddProduct from "../components/AddProduct";
import Table from "../components/Table";
import { useOutletContext } from "react-router-dom";

function Products() {
  
	const {
		products,
		setProducts,
	} = useOutletContext();
	return (
		<div>
			<ProductSearch />
			<AddProduct />
			<Table type="products" content={products} />
		</div>
	);
}

export default Products;
