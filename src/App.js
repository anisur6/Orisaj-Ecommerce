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
import PrivateRoute from './Components/PrivateRoute';
import Dashboard from './Components/Dashboard';
import AddReview from './Components/AddReview';
import MyOrder from './Components/MyOrder';
import AllOrder from './Components/AllOrder';
import UserProfile from './Components/UserProfile';
import AddProduct from './Components/AddProduct';
import ManageReview from './Components/ManageReview';
import Payment from './Components/Payment';
import Ruser from './Components/Ruser';
import DUproduct from './Components/DUproduct';





function App() {
  return (
    <div className="App">

      <BrowserRouter>
      

      <Header/>



      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/product" element={<Products />} />
        <Route path="/productDetail/:id" element={<PrivateRoute><ProductDetail/></PrivateRoute>} />
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="addreview" element={<AddReview/>} />
          <Route path="myorder" element={<MyOrder/>} />
          <Route path="allorder" element={<AllOrder/>} />
          <Route path="profile" element={<UserProfile/>} />
          <Route path="payment" element={<Payment/>} />
          <Route path="ruser" element={<Ruser/>} />
          <Route path="addproduct" element={<AddProduct/>} />
          <Route path="duproduct" element={<DUproduct/>} />
          <Route path="manageReview" element={<ManageReview/>} />

        </Route>


      </Routes>


   

    

    

    

    


    <Footer/>

    </BrowserRouter>

    </div>
  );
}

export default App;
