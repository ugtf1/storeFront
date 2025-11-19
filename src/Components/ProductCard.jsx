import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} className="product-card">
    <img src={product.imageUrl} alt={product.title} className="product-image" />
    <div className="product-info">
      <h3 className="product-title">{product.title}</h3>
      <div className="product-rating">⭐ {product.rating} / 5</div>
      <div className="product-price">${product.price}</div>
      <p className="product-description">{product.description}</p>
    </div>
  </Link>
);

export default ProductCard;