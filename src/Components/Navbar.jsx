import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ import Link

const Navbar = () => {
  return (
    <nav style={styles.container}>
      {/* Brand */}
      <div style={styles.brand}>Storefront</div>

      {/* Menu Items */}
      <ul style={styles.menu}>
        <li style={styles.menuItem}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/categories" style={styles.link}>Categories</Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/promotions" style={styles.link}>Promotions</Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/account" style={styles.link}>Account</Link>
        </li>
      </ul>

      {/* Cart Icon */}
      <div style={styles.cart}>
        <FaShoppingCart size={20} />
      </div>
    </nav>
  );
};

const styles = {
  container: {
    width: "100vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)", // ✅ dark overlay effect
    backdropFilter: "blur(4px)",        // ✅ adds a frosted glass feel
    color: "#eceff3ff",
    padding: "15px 40px",
    position: "fixed",
    top: "40px",
    zIndex: 999,
    boxSizing: "border-box",
    flexWrap: "wrap",
    borderRadius: "8px",                // optional rounded edges
  },
  brand: {
    fontSize: "20px",
    fontWeight: "bold",
    flex: 1,
    textAlign: "left",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    flex: 2,
    margin: 0,
    padding: 0,
    flexWrap: "wrap",
  },
  menuItem: {
    margin: "0 15px",
    fontSize: "16px",
    transition: "color 0.3s ease",
  },
  link: {
    textDecoration: "none",
    color: "#ecececff", // ✅ ensure link inherits your color
  },
  cart: {
    flex: 1,
    textAlign: "right",
    cursor: "pointer",
  },
};

export default Navbar;