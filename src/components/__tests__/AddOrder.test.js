import AddOrder from "../AddOrder";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockProducts = [
	{
		id: 2,
		imageUrl:
			"https://4.bp.blogspot.com/-sgxcgr2z5vo/WMbQCoYNPoI/AAAAAAAADvI/QALCKMlkfd4t_0hWAGchen_A0g4h3LGnQCLcB/s1600/Snapshot%25281264%2529.bmp",
		name: "box Kutsinta",
		price: 200,
	},
];

test("Increments item quantity", () => {
	render(<AddOrder products={mockProducts} />);

	//Click add order button to open modal. The difference of get, find, query, is get errors if it can't find it, find returns a rejected promise, query returns null.
	userEvent.click(screen.getByText(`Add Order`));

	//click increment button
	userEvent.click(screen.getByText(`+`));

	//check if the new quantity of the item is 1
	expect(screen.getByText(/1./).textContent).toContain(`1`);
});
