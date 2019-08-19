import React from 'react';
import './Product.css';
import { buyAction } from '../../redux/action';

export default function Product(props) {
  const {
    title, 
    description, 
    price,
    count,
    id, 
    cartProd,
    buy, 
    deleteProduct,
    changeCount,
  } = props;
  if (cartProd) {
    return (
      <section className="cartProduct">
        <button 
          onClick={() => deleteProduct(id)}
          className="cartProduct_buttonDelete"
        >
          &times;
        </button>
        <div className="cartProduct_description">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="cartProduct_count">
          <button
            onClick={() => changeCount(id, '+')}
            className="cartProduct_buttonPlus"
          >
            +
          </button>
          <span className="cartProduct_displayCount">{count}</span>
          <button
            onClick={() => changeCount(id, '-')}
            className="cartProduct_buttonMinus"
          >
            -
          </button>
        </div>
        <span className="cartProduct_price">{`${price * count}$`}</span>
      </section>
    )
  }

  return (
    <section className="product">
      <h1 className="product_title">{title}</h1>
      <p className="product_description">{description}</p>
      <div className="product_price">
        <p>Price:</p>
        <span>{`${price}$`}</span>
      </div>
      <button 
        onClick={() => buy(id)}
        className="product_buttonBuy"
      >
        buy
      </button>
    </section>
  )
};