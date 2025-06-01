import React from 'react';
import LandingPage from './Example1';
import AboutUs from './Example2';
import Contact from './Example3';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar1';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kontakt" element={<AboutUs />} />
        <Route path="/abus" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

