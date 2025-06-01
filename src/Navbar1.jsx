import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div style={{
      height: "10vh", display: "flex", backgroundColor: "gray"
    }}>
      <ul style={{ display: "flex", gap: "2rem" }}>
        < li >
          <Link to='/'> Pocetna </Link>
        </li >
        <li>
          <Link to='/kontakt'> nesto </Link>
        </li>
        <li>
          <Link to='/abus'> Pocetna </Link>
        </li>
      </ul >
    </div >
  )
}

export default Navbar
