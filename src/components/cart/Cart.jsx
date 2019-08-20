import React from 'react'
import ProductHandler from '../product/ProductHandler';
import './Cart.css'

export default function Cart({ cart, total }) {
  if (cart.length !== 0) {
    let total = cart.reduce((total, product) => total + (product.price * product.count), 0);
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
    <p className="cartCatalog_empty"> you cart is empty :(</p>
  )

}
