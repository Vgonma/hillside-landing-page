import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='nosotros' />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
