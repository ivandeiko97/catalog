import React from 'react'

export default function Product(props) {
  const {title, description, price} = props;
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{`price: ${price}$`}</span>
    </section>
  )
}
