import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Continents from './components/Continents';
import './App.scss';
import Countries from './components/Countries';
import Country from './components/Country';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Continents />} />
          <Route path="/Countries/:continent" element={<Countries />} />
          <Route path="/Country/:country" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
