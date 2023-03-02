import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import CartProvider from "./aux/CartContext";
import { theme } from "./branding/theme";
import Navbar from "./components/navbar/NavBar";
import Bio from "./screens/Bio";
import Contact from "./screens/Contact";
import ContactWebDev from "./screens/ContactWebDev";
import Douglas from "./screens/Douglas";
import FraxinusSmall from "./screens/FraxinusSmall";
import Home from "./screens/Home";
import Leylandii from "./screens/Leylandii";
import Platanoides from "./screens/Platanoides";
import PrunusAvium from "./screens/PrunusAvium";
import PrunusSerrulata from "./screens/PrunusSerrulata";
import PrunusTwin from "./screens/PrunusTwin";
import RoundAsh from "./screens/RoundAsh";
import Success from "./screens/Success";
import Sycamore from "./screens/Sycamore";

function App({ handleShow }) {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactWebDev" element={<ContactWebDev />} />
          <Route path="/leylandii" element={<Leylandii />} />
          <Route path="/prunusSerrulata" element={<PrunusSerrulata />} />
          <Route path="/fraxinusSmall" element={<FraxinusSmall />} />
          <Route path="/sycamore" element={<Sycamore />} />
          <Route path="/platanoides" element={<Platanoides />} />
          <Route path="/douglas" element={<Douglas />} />
          <Route path="/prunusTwin" element={<PrunusTwin />} />
          <Route path="/roundAsh" element={<RoundAsh />} />
          <Route path="/prunusAvium" element={<PrunusAvium />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
