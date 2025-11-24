import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://storeapis-8bua.onrender.com/api/product/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {loading
          ? Array.from({ length: 8 }).map((_, i) => ( // ✅ 8 skeletons
              <div key={i} style={styles.card}>
                <div style={styles.skeletonImage}></div>
                <div style={styles.info}>
                  <div style={styles.skeletonText}></div> {/* product name */}
                  <div style={styles.skeletonTextSmall}></div> {/* product price */}
                </div>
              </div>
            ))
          : products.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                style={styles.cardLink}
              >
                <div style={styles.card}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={styles.image}
                  />
                  <div style={styles.info}>
                    <h3 style={styles.name}>{product.name}</h3>
                    <p style={styles.price}>${product.price}</p>
                    <p style={styles.stock}>In stock: {product.stock}</p>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "40px",
    boxSizing: "border-box",
  },
  container: {
    display: "grid", // ✅ use grid for consistent rows
    gridTemplateColumns: "repeat(4, 1fr)", // 4 per row on desktop
    gap: "20px",
  },
  cardLink: {
    textDecoration: "none",
    color: "inherit",
  },
  card: {
    backgroundColor: "#e0d3d3ff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  info: {
    padding: "15px",
  },
  name: {
    fontSize: "18px",
    margin: "0 0 10px",
    fontWeight: "600",
    color: "#333",
  },
  price: {
    fontSize: "16px",
    color: "#0077cc",
    margin: "0 0 5px",
    fontWeight: "500",
  },
  stock: {
    fontSize: "14px",
    color: "#555",
    margin: 0,
  },

  // Skeleton styles
  skeletonImage: {
    width: "100%",
    height: "200px",
    backgroundColor: "#949090ff",
    animation: "pulse 1.5s infinite",
    borderRadius: "8px 8px 0 0",
  },
  skeletonText: {
    width: "70%",
    height: "18px",
    backgroundColor: "#868181ff",
    margin: "12px 0",
    borderRadius: "4px",
    animation: "pulse 1.5s infinite",
  },
  skeletonTextSmall: {
    width: "40%",
    height: "16px",
    backgroundColor: "#757070ff",
    margin: "8px 0",
    borderRadius: "4px",
    animation: "pulse 1.5s infinite",
  },
};

// ✅ Add keyframes for skeleton animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
}`, styleSheet.cssRules.length);

// ✅ Responsive media queries
styleSheet.insertRule(`
@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
`, styleSheet.cssRules.length);

export default ProductList;