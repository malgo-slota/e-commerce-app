import React from "react";
import {Route, Routes, useLocation} from 'react-router-dom';

//components
import Home from './Home.jsx';

function Pages() {
  const location = useLocation();

  return (
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />}/>
      </Routes>      
  );
}

export default Pages;