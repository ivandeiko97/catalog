import React from 'react'
import ProductHandler from '../product/ProductHandler';

export default function Catalog({ products }) {
  return (
    <div>
      {products.map(product => <ProductHandler product={product}/>)}
    </div>
  )
}
