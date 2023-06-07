import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import Levels from './components/levels'
import Nosotros from './components/nosotros';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='nosotros' element={<Nosotros />} />
        <Route path='niveles' element={<Levels />} />
        <Route path='contacto' element={<Contact />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
