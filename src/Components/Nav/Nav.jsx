// src/Components/Nav/Nav.jsx

import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import {AuthContext} from '../../COntext/AuthContext';

const Navbar = () => {
  const { currentUser , logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        LOGO
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          About
        </NavLink>
        {currentUser ?
          <>
        <NavLink 
          to="/allposts" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          All Posts
        </NavLink>
        <NavLink 
          to="/mypost" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          My Post
        </NavLink>
        <NavLink 
          onClick={logout} 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Log Out
        </NavLink>
          
          </>
        :<>
        <NavLink 
          to="/signup" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Sign Up
        </NavLink>
        <NavLink 
          to="/login" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Login
        </NavLink>
        </>}
      </div>
      <div className="hamburger" onClick={handleHamburgerClick}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
