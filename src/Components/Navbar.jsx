import React from "react";
import { BiFontColor } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa"; // for cart icon

const Navbar = () => {
  return (
    <nav style={styles.container}>
      {/* Brand */}
      <div style={styles.brand}>Storefront</div>

      {/* Menu Items */}
      <ul style={styles.menu}>
        <li style={styles.menuItem}>Home</li>
        <li style={styles.menuItem}>Categories</li>
        <li style={styles.menuItem}>Promotions</li>
        <li style={styles.menuItem}>Account</li>
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
    backgroundColor: "transparent", // ✅ transparent navbar
    color: "#eceff3ff",               // elegant dark blue text
    padding: "15px 30px",
    position: "fixed",             // stays under topbar when scrolling
    top: "30px",                    // adjust to height of TopBar
    zIndex: 999,
    boxSizing: "border-box",
    flexWrap: "wrap",
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
    cursor: "pointer",
    fontSize: "16px",
    transition: "color 0.3s ease",
    Color: "#ecececff",
  },
  cart: {
    flex: 1,
    textAlign: "right",
    cursor: "pointer",
  },
};

export default Navbar;