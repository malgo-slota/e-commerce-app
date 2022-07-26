import React from "react";
import {Route, Routes, useLocation} from 'react-router-dom';

//components
import Home from './Home.jsx';
import Product from "./Product.jsx";

function Pages() {
  const location = useLocation();

  return (
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:id" element={<Product />}/>
      </Routes>      
  );
}

export default Pages;