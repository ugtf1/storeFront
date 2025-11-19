import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import './CategoriesCard.css';

const CategoryCards = () => {
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  const handleFilter = (keyword) => {
    const result = categories.filter(cat =>
      cat.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div className="category-wrapper">
      <input
        type="text"
        placeholder="Search categories..."
        onChange={(e) => handleFilter(e.target.value)}
        className="category-search"
      />

      <div className="category-container">
        {loading
          ? Array(6).fill().map((_, i) => (
              <div className="category-card skeleton" key={i}></div>
            ))
          : filtered.map((cat, i) => (
              <CategoryCard key={i} title={cat.title} imageUrl={cat.imageUrl} />
            ))}
      </div>
    </div>
  );
};

export default CategoryCards;