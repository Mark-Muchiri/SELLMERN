import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ROUTE ELEMENT DIRECTORY
import Home from "../pages/Home/Home";
import Store from "../pages/Store/Store";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import Checkout from "../pages/Checkout/Checkout";
import Signup from "../pages/signup/Signup";
import ProductForm from "../pages/ProductForm/ProductForm"


function routes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Store />} />
                    <Route path="/welcome" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contact />} />
                    <Route path="/productDetail" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/productForm" element={<ProductForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default routes;