import React from "react";
import {Route, Routes, useLocation} from 'react-router-dom';

//components
import Home from './Home.jsx';
import Product from "./Product.jsx";
import Login from "./Login";
import SignUp from "./SignUp";

function Pages() {
  const location = useLocation();

  return (
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>      
  );
}

export default Pages;