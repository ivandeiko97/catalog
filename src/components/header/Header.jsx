import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

export default function header() {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navigation_list">
          <li>
            <NavLink exact={true} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navigation_cart"></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
