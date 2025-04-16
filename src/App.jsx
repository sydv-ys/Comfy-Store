import React from "react";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <>
      <About />
      <Cart />
      <Checkout />
      <Error />
      <HomeLayout />
      <Landing />
      <Login />
      <Orders />
      <Products />
      <Register />
      <SingleProduct />
    </>
  );
}

export default App;
