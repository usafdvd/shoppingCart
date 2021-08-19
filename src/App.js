import React, { useState } from "react";
import Main from './components/Main';
import Cart from "./components/Cart";
import { Route } from "react-router-dom";
import Header from './components/Header';
import { ProductCartContext } from "./context/productCart";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  return (
    <BrowserRouter>
    <ProductCartContext.Provider value={{ productsInCart, setProductsInCart }}>
      <Header />
      <Route path="/" exact><Main /></Route>
      <Route path="/cart"><Cart /></Route>
    </ProductCartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
