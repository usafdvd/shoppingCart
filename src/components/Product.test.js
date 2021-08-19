import TestRenderer from "react-test-renderer";
import Product from "./Product";

const mockProduct = {
  id: 1,
  name: "Test Product",
  description: "This is a short description",
  price: 22.0,
  currency: "USD",
  in_stock: true,
  vendor: {
    id: 18,
    name: "Colorado Rockies Co"
  }
}
const mockAddProduct = jest.fn();

it('render correctly text component', () => {  
  const ProductComponent = TestRenderer.create(<Product item={mockProduct} addProductToCart={mockAddProduct}/>).toJSON();
  expect(ProductComponent).toMatchSnapshot();
});

