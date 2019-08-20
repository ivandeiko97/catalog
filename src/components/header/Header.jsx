import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

export default function Header({ count }) {
  return (
    <header className="header">
      <div className="header_wrapper">
        <nav className="navigation">
          <ul className="navigation_list">
            <li className="navigation_catalog">
              <NavLink to="/">Catalog</NavLink>
            </li>
            <li className="navigation_cart">
              <NavLink to="/cart" className="navigation_cartLink">
                <span className={`navigation_count ${count === 0 ? 'hidden' : ''}`} >{count}</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
