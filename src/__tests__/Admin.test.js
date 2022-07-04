import Admin from "../Admin";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
	jest.restoreAllMocks();
});

//jest.mock is to mock a library
jest.mock("react-router-dom", () => {
	// Require the original module to not be mocked...
	const originalModule = jest.requireActual("react-router-dom");

	return {
		__esModule: true,
		...originalModule,
		Outlet: () => <div>mock outlet</div>,
	};
});

test("fetch in admin", async () => {
	// jest.spyOn(global, "fetch").mockResolvedValueOnce({
	// 	json: jest
	// 		.fn()
	// 		.mockResolvedValueOnce({ ok: true, data: { orders: [{}] } }),
	// });

	//alternative to above
	jest.spyOn(global, "fetch").mockImplementationOnce(() =>
		Promise.resolve({
			json: jest
				.fn()
				.mockResolvedValueOnce({ ok: true, data: { orders: [{}] } }),
		})
	);

	//jest.fn(()=>'hello') is the same as
	// jest.fn().mockImplementation(()=>'hello')

	render(
		<BrowserRouter>
			<Admin />
		</BrowserRouter>
	);

	// to show html, has to be in not silent mode
	// screen.debug();

	// fetch must be a mock or spy
	expect(fetch).toHaveBeenCalledTimes(1);
});

test("failed fetch in admin", async () => {
	// another way to mock fetch
	jest.spyOn(global, "fetch").mockRejectedValueOnce("Error");
	render(
		<BrowserRouter>
			<Admin />
		</BrowserRouter>
	);

	// to show html, has to be in not silent mode
	// screen.debug();

	// fetch must be a mock or spy
	expect(fetch).toHaveBeenCalledTimes(1);
});
