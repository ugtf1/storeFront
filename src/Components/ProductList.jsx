import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="product-list-wrapper">
      <h2>Shop Products</h2>
      <div className="product-grid">
        {loading
          ? Array(6).fill().map((_, i) => (
              <div className="product-card skeleton" key={i}></div>
            ))
          : products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductList;