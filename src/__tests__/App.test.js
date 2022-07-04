import App from "../App";
import { render, screen } from "@testing-library/react";
//to use toBeInTheDocument
import "@testing-library/jest-dom";
import {MemoryRouter} from "react-router-dom"

jest.mock("react-router-dom", () => ({
	// __esModule: true needs to be specified when module has a default export
	__esModule: true,
	// requires all the other properties of the module except useNavigate, which is mocked
	...jest.requireActual("react-router-dom"),
	// fn() can optionally take in a function, similar to spyOn(object,methodName) but spyOn tracks calls to object[methodName].
	useRoutes: () => jest.fn(),
}));

test("Renders App Component", () => {
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
	expect(
		screen.queryByText(/Yummy Bites/, { exact: false })
	).toBeInTheDocument();
});
