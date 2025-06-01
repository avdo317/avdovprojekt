import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MeniList from './params/MeniList';
import MeniDetails from './params/MeniDetails';

const App = () => {
  const styles = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '36px',
    color: '#333',
    textDecoration: 'none',
  }
  return (
    <div style={styles}>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<MeniList />} />
          <Route path='/:id' element={<MeniDetails />} />
          {/* <Route path="/" element={<LandingPage />} /> */}
          {/* <Route path="/kontakt" element={<AboutUs />} /> */}
          {/* <Route path="/abus" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

