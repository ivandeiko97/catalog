import React from 'react';
import ProductHandler from '../product/ProductHandler';
import './Catalog.css';

export default function Catalog({ products }) {
  return (
    <div className="catalog">
      {products.map(product => <ProductHandler key={product.id} cartProd={false} product={product}/>)}
    </div>
  )
}
