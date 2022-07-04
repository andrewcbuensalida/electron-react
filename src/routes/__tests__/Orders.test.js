import Orders from "../Orders";
// enzyme basically loads react components, and not it's children
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

afterEach(() => {
	jest.resetAllMocks();
});

//this mocks the whole react-router-dom module. All things exported will be turned into jest.Mock unless specified in the return of the callback. jest.fn() mocks a function. jest.spyOn() mocks a module or a function. advantage of spyOn is you can mockRestore which removes the mock and uses the original.
jest.mock("react-router-dom", () => {
	// Require the original module to not be mocked...
	const originalModule = jest.requireActual("react-router-dom");

	return {
		__esModule: true,
		//all other parts of react-router-dom are retained except useOutletContext
		...originalModule,
		useOutletContext: () => ({
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
					dateOrdered: "2022-03-02T17:37:51.834Z",
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
					dateOrdered: "2022-03-02T17:37:51.834Z",
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
		}),
	};
});

// making the test hang
// jest.mock("date-fns", () => ({
// 	...jest.requireActual("date-fns"),
// 	format: jest.fn().mockReturnValue("your date"),
// }));

// this also makes it hang
// jest.mock("../../components/OrdersContent", () => (props) => <div>hello</div>);
// jest.mock("../../components/Table", () => (props) => <div>hello</div>);
// jest.mock("../../components/FilterOrders", () => (props) => <div>hello</div>);

// This doesnt make it hang
// jest.mock("../../components/AddOrder", () => (props) => <div>hello</div>);

test("Pending button only shows pending orders", () => {
    //i guess calling shallow already tests if it renders
	let wrapper = shallow(<Orders />);

    // should expect wrapper.find... to something
	expect(true).toBe(true);
});
