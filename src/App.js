import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.jsx'
import Home from './components/Pages/Home/Home.jsx'
import Plans from './components/Pages/Plans/Plans.jsx'
import News from './components/Pages/News/News.jsx'
import Sofas from './components/Pages/Sofas/Sofas.jsx'
import Products from './components/Pages/Products/Products.jsx'
import Deco from './components/Pages/Deco/Deco.jsx'
import Login from './components/Pages/Login/Login.jsx'
import Inscription from './components/Pages/Inscription/Inscription.jsx'
import Meubles from './components/Pages/Meubles/Meubles.jsx'
import Items from './components/Pages/Items/Items.jsx'
import Footer from './components/Footer/Footer.jsx'
import Breadcrumb from './components/Breadcrumb/Breadcrumb.jsx'


const App = () => {
  return (
    <Router>
      <Header />
      <Breadcrumb /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/news" element={<News />} />
        <Route path="/sofas" element={<Sofas />} />
        <Route path="/products" element={<Products />} />
        <Route path="/deco" element={<Deco />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/meubles" element={<Meubles />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    <Footer/>
    </Router>
  )
}

export default App