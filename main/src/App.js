import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import CartProvider from "./components/CartContext";
import Checkout from "./components/Checkout";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <CartProvider>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/"  element={<ItemListContainer  />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/categoria/:idcategoria" element={<ItemListContainer />} />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
