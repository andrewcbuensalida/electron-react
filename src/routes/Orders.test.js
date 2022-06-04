import Orders from "./Orders";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useOutletContext } from "react-router-dom";

//No idea what I'm doing


test("Pending button only shows pending orders", () => {
    const mockUseOutletContext = jest.fn(() => ({
		orders: [
			{
				id: 1,
				customerId: 1,
				items: [
					{
						productId: 1,
						quantity: 3,
					},
					{
						productId: 2,
						quantity: 2,
					},
				],
				deliveryAddress: "pick-up",
				deliveryTime: "2022-03-02T17:37:51.834Z",
				dateOrdered: "2022-02-02T17:37:51.834Z",
				isPending: true,
				isPaid: false,
			},
			{
				id: 2,
				customerId: 2,
				items: [
					{
						productId: 1,
						quantity: 6,
					},
					{
						productId: 2,
						quantity: 12,
					},
				],
				deliveryAddress: "262 Strawberry Fields, United Kingdom",
				deliveryTime: "2022-09-02T17:37:51.834Z",
				dateOrdered: "2022-01-02T17:37:51.834Z",
				isPending: false,
				isPaid: true,
			},
		],
		customers: [
			{
				id: 1,
				firstName: "John",
				lastName: "Lennon",
				homeAddress: "345 Penny Lane, United Kingdom",
				cellPhone: "0934-652-6435",
			},
			{
				id: 2,
				firstName: "Paul",
				lastName: "McCartney",
				homeAddress: "262 Strawberry Fields, United Kingdom",
				cellPhone: "0935-652-6775",
			},
		],
		products: [
			{
				id: 2,
				name: "box Kutsinta",
				price: 200,
				imageUrl:
					"https://4.bp.blogspot.com/-sgxcgr2z5vo/WMbQCoYNPoI/AAAAAAAADvI/QALCKMlkfd4t_0hWAGchen_A0g4h3LGnQCLcB/s1600/Snapshot%25281264%2529.bmp",
			},
			{
				id: 1,
				name: "dozen Chicken Empanada",
				price: 150,
				imageUrl:
					"https://www.curiouscuisiniere.com/wp-content/uploads/2018/09/Fried-Bolivian-Chicken-Empanadas.jpg.webp",
			},
		],
	}));

	jest.mock("react-router-dom", () => {
		return {
			useOutletContext: mockUseOutletContext,
		};
	});
	
	render(<Orders />);

	// userEvent.click(screen.get)

	expect(screen.getByText(/Pending/i)).not.toContain(/No/i);
});
