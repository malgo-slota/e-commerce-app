import React from "react";
import { BrowserRouter} from "react-router-dom";
import { CartProvider } from "./CartContext";
//components
import Header from './components/Header';
import Pages from './pages/Pages';
import Footer from "./components/Footer";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Pages />
        <Footer />
      </BrowserRouter>
    </CartProvider>      
  );
}

export default App;
