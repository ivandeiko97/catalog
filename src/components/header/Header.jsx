import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

export default function header() {
  console.dir(window.location.pathname)
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navigation_list">
          <li>
            <NavLink exact={true} activeClassName="activeLink" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
