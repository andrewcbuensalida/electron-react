import AddCustomer from "../AddCustomer";
import { render, screen } from "@testing-library/react";
//to use toBeInTheDocument
import "@testing-library/jest-dom";

test("Increments item quantity", () => {
	render(<AddCustomer />);

	expect(screen.queryByText(/add customer/i,{exact:false})).toBeInTheDocument();
});
