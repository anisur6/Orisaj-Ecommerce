import React from 'react';
import './App.css';
import CatagoryDemo from './Components/CatagoryDemo';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Products from './Components/Products';



function App() {
  return (
    <div className="App">



      <Header/>
    <CatagoryDemo/>

    <Products />


    <Footer/>

    </div>
  );
}

export default App;
