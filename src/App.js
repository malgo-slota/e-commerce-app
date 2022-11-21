import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./CartContext";
import { SearchProvider } from './SearchContext';
import { SummaryProvider } from "./SummaryContext";
//components
import Header from './components/Header';
import Pages from './pages/Pages';
import Footer from "./components/Footer";

function App() {

  return (
    <CartProvider>
      <SearchProvider>
        <BrowserRouter>
          <Header />
            <SummaryProvider>
              <Pages />
            </SummaryProvider>
          <Footer />
        </BrowserRouter>
      </SearchProvider>
    </CartProvider>      
  );
}

export default App;
