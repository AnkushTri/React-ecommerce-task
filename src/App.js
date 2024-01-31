import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
// import ProductDetail from "./Components/ProductDetail";
import Login from "./Components/Login";
import Error from "./Components/Error";
import {Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";

 import "./Components/ecommerce.css"
import Register from "./Components/Register";
import Logout from "./Components/Logout";
 

function App() {
  return (
    <>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<Register/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/product" element={<Products/>}/>
      {/* <Route path="/product/:id" element={<ProductDetail/>}/> */}
      {/* <Route path="/addtocart" element={<AddToCart/>}/> */}
      
      <Route path="*" element={<Error/>}/>

    </Routes>
    
    </>
  );
}

export default App;
