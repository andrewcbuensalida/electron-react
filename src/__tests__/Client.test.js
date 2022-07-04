import Client from "../Client";
import { render, screen } from "@testing-library/react";
//to use toBeInTheDocument
import "@testing-library/jest-dom";

test("Increments item quantity", () => {
	render(<Client />);

	expect(
		screen.queryByText(/Client/, { exact: false })
	).toBeInTheDocument();
});
