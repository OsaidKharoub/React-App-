import React from 'react'
import './App.css';
import Navbar from './Component/Navbar/index'
import Allcomp from './Component/AllComponent/index'
import Contact from './Component/Contact/index'
import Footer from './Component/Footer/index'
import Home from './Component/Home/index'
import {BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path = '/' component = {Allcomp} />
      <Route path = '/Contact' component = {Contact} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
