import Login from "../Login";
import { render, screen } from "@testing-library/react";
//to use toBeInTheDocument
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => jest.fn(),
}));

test("Renders Login Component", () => {
	render(<Login />);

	expect(screen.queryByText(/Login/, { exact: false })).toBeInTheDocument();
})
