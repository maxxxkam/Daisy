import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Transform from './components/Transform/Transform';
import Midnight from './components/Midnight/Midnight';
import Catalog from './components/Catalog/Catalog';
import Snail from './components/Snail/Snail';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Policy from './components/Policy/Policy';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <>
      {/* <Hero/>
    <Transform/>
    <Midnight/>
    <Catalog/>
    <Snail/>
    <Login/> */}
    <ScrollToTop/>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/transform' element={<Transform/>} />
        <Route path='/midnight' element={<Midnight/>} />
        <Route path='/catalog' element={<Catalog/>} />
        <Route path='/snail' element={<Snail/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/policy' element={<Policy/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
