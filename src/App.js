import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './responsive.css';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import ProductDetail from './Components/ProductDetail';
import Products from './Components/Products';
import Register from './Components/Register';





function App() {
  return (
    <div className="App">

      <BrowserRouter>
      

      <Header/>



      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/productDetail" element={<ProductDetail/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/product" element={<Products />} />


      </Routes>


   

    

    

    

    


    <Footer/>

    </BrowserRouter>

    </div>
  );
}

export default App;
