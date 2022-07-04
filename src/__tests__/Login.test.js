import Login from "../Login";
import { render, screen } from "@testing-library/react";
//to use toBeInTheDocument
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

//jest.mock mocks the react-router-dom module because useNavigate is used in the Login component. The second argument is an explicit module factory. Whatever that factory function returns is what is returned when importing react-router-dom. Without second function, importing react-router-dom will return a function that returns undefined because it is auto-mocked.
jest.mock("react-router-dom", () => ({
	// __esModule: true needs to be specified when module has a default export
	__esModule: true,
	// requires all the other properties of the module except useNavigate, which is mocked
	...jest.requireActual("react-router-dom"),
	// fn() can optionally take in a function, similar to spyOn(object,methodName) but spyOn tracks calls to object[methodName].
	useNavigate: () => jest.fn(),
}));

test("Renders Login Component", () => {
	render(<Login />);
	expect(screen.queryByText(/Login/, { exact: false })).toBeInTheDocument();
});

test("handles customer login", () => {
	// recommended to setup before component renders. And don't have userEvent functions outside of test eg before/after hook. For some reason this doesn't work because setup is not a function
	// const user = userEvent.setup()

	render(<Login />);
    // doesn't have to be in an expect to make it fail. If it doesn't find the element with getByRole, it will fail the test.
	userEvent.click(screen.getByRole("button", { name: /Customer/ }));
	expect(screen.queryByText(/Login/, { exact: false })).toBeInTheDocument();
});
