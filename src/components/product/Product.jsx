import React, { useState } from 'react';
import './Product.css';

export default function Product(props) {
  const [countProduct, setCount] = useState(1);

  const {
    title, 
    description, 
    price,
    count,
    id, 
    cartProd,
    buy, 
    deleteProduct,
    plusCount,
    minusCount,
  } = props;

  if (cartProd) {
    return (
      <section className="cartProduct">
        <div className="cartProduct_wrapper">
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
              onClick={() => plusCount(id)}
              className=" cartProduct_button cartProduct_button__plus"
            >
              +
            </button>
            <span className="cartProduct_displayCount">{count}</span>
            <button
              onClick={() => minusCount(id, '-')}
              disabled={count === 1}
              className="cartProduct_button cartProduct_button__minus"
            >
              -
            </button>
          </div>
          <span className="cartProduct_price">{`${price * count}$`}</span>
        </div>
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
      <div className="cartProduct_count cartProduct_count__simpleProduct">
        <button
          onClick={() => setCount(countProduct + 1)}
          className="cartProduct_button cartProduct_button__plus"
        >
          +
        </button>
        <span className="cartProduct_displayCount">{countProduct}</span>
        <button
          onClick={() => setCount(countProduct - 1)}
          disabled={countProduct === 1}
          className="cartProduct_button cartProduct_button__minus"
        >
          -
        </button>
      </div>
      <button 
        onClick={() => buy(id, countProduct)}
        className="product_buttonBuy"
      >
        buy
      </button>
    </section>
  )
};