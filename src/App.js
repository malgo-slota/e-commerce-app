import React from "react";
import { BrowserRouter} from "react-router-dom";
//components
import Header from './components/Header';
import Pages from './pages/Pages';
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Pages />
      <Footer />
    </BrowserRouter>
            
  );
}

export default App;
