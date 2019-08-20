import React from 'react'
import ProductHandler from '../product/ProductHandler';
import { NavLink } from 'react-router-dom';
import './Cart.css'

export default function Cart({ cart, total }) {
  if (cart.length !== 0) {
    return (
      <div className="cartCatalog">
        {cart.map(product => <ProductHandler key={product.id} cartProd={true} product={product}/>)}
        <div className="cartCatalog_totalPrice">
          <span>total:</span>
          <p>{`${total}$`}</p>
        </div>
      </div>
    )
  }
  return (
    <section className="cartCatalog_empty">
      <p> you cart is empty :(</p>
      <NavLink className="cartCatalog_buttonOrder" to="/">Order products</NavLink>
    </section>
  )

}
