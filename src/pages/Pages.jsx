import React from "react";
import {Route, Routes, useLocation} from 'react-router-dom';

//components
import Home from './Home.jsx';
import Product from "./Product.jsx";
import Login from "./Login";
import SignUp from "./SignUp";
import ShopSection from "./ShopSection.jsx";
import CategoryShopSection from "./CategoryShopSection";
import NotFound from "../components/NotFound.jsx";
import SearchResults from "./SearchResults.jsx";
import Cart from "./Cart";
import Shipping from "./Shipping.jsx";
import Details from "./Details.jsx";
import Summary from "./Summary.jsx";

function Pages() {
  const location = useLocation();

  return (
      <Routes Location={location} key={location.pathname}>
          <Route path="/" element={<Home />}/>
          <Route path="/product/:id" element={<Product />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/products" element={<ShopSection/>}/>
          <Route path="/products/category/:category" element={<CategoryShopSection/>}/>
          <Route path="/search" element={<SearchResults />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/shipping" element={<Shipping />}/>
          <Route path="/details" element={<Details />}/>
          <Route path="/summary" element={<Summary />} />
          <Route path="*" element={<NotFound/>}/>
      </Routes>      
  );
}

export default Pages;