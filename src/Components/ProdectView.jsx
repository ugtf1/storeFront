import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/product/products/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <div style={styles.skeletonImage}></div>
          <div style={styles.info}>
            <div style={styles.skeletonText}></div>
            <div style={styles.skeletonText}></div>
            <div style={styles.skeletonTextSmall}></div>
            <div style={styles.skeletonTextSmall}></div>
            <div style={styles.skeletonButton}></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) return <p>Product not found</p>;

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <div style={styles.info}>
          <h2 style={styles.name}>{product.name}</h2>
          <p style={styles.description}>{product.description}</p>
          <p style={styles.category}>
            Category:{" "}
            {typeof product.category === "object"
              ? product.category.name
              : product.category}
          </p>
          <p style={styles.price}>Price: ${product.price}</p>
          <p style={styles.stock}>In stock: {product.stock}</p>

          {/* ✅ Add to Cart Button */}
          <button style={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "60px",
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    maxWidth: "1000px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
    padding: "30px",
    alignItems: "flex-start",
  },
  image: {
    width: "50%",
    objectFit: "cover",
    borderRadius: "10px",
  },
  info: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#222",
  },
  description: {
    fontSize: "16px",
    marginBottom: "15px",
    color: "#555",
    lineHeight: "1.6",
  },
  category: {
    fontSize: "15px",
    marginBottom: "10px",
    color: "#777",
  },
  price: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#0077cc",
  },
  stock: {
    fontSize: "15px",
    marginBottom: "20px",
    color: "#444",
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "#0077cc",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },

  // Skeleton styles
  skeletonImage: {
    width: "50%",
    height: "300px",
    backgroundColor: "#e0e0e0",
    animation: "pulse 1.5s infinite",
    borderRadius: "10px",
  },
  skeletonText: {
    width: "70%",
    height: "20px",
    backgroundColor: "#e0e0e0",
    margin: "12px 0",
    borderRadius: "4px",
    animation: "pulse 1.5s infinite",
  },
  skeletonTextSmall: {
    width: "40%",
    height: "16px",
    backgroundColor: "#e0e0e0",
    margin: "8px 0",
    borderRadius: "4px",
    animation: "pulse 1.5s infinite",
  },
  skeletonButton: {
    width: "120px",
    height: "40px",
    backgroundColor: "#e0e0e0",
    marginTop: "20px",
    borderRadius: "8px",
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

// ✅ Responsive layout
styleSheet.insertRule(`
@media (max-width: 768px) {
  .product-card {
    flex-direction: column;
  }
}
`, styleSheet.cssRules.length);

export default ProductView;