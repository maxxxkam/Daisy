import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Transform from './components/Transform/Transform'
import Midnight from './components/Midnight/Midnight'
import Catalog from './components/Catalog/Catalog'
import Snail from './components/Snail/Snail'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Transform/>
    <Midnight/>
    <Catalog/>
    <Snail/>
    <Login/>
    <Footer/>
    </>
  )
}

export default App