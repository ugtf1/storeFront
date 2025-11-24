import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand / About */}
        <div style={styles.section}>
          <h2 style={styles.brand}>Storefront</h2>
          <p style={styles.text}>
            Your one‑stop shop for elegant and affordable products. Discover
            deals, categories, and more.
          </p>
        </div>

        {/* Navigation Links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.list}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/categories" style={styles.link}>Categories</Link></li>
            <li><Link to="/promotions" style={styles.link}>Promotions</Link></li>
            <li><Link to="/account" style={styles.link}>Account</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Follow Us</h3>
          <div style={styles.socials}>
            <a href="https://facebook.com" style={styles.socialIcon}><FaFacebookF /></a>
            <a href="https://twitter.com" style={styles.socialIcon}><FaTwitter /></a>
            <a href="https://instagram.com" style={styles.socialIcon}><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>
          © {new Date().getFullYear()} Storefront. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#111",
    color: "#eee",
    marginTop: "40px",
    paddingTop: "40px",
    fontFamily: "sans-serif",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  section: {
    flex: "1 1 250px",
    marginBottom: "20px",
  },
  brand: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#fff",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#fff",
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#ccc",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  link: {
    display: "block",
    marginBottom: "8px",
    textDecoration: "none",
    color: "#ccc",
    transition: "color 0.3s ease",
  },
  socials: {
    display: "flex",
    gap: "15px",
  },
  socialIcon: {
    color: "#ccc",
    fontSize: "18px",
    transition: "color 0.3s ease",
  },
  bottomBar: {
    borderTop: "1px solid #333",
    marginTop: "20px",
    padding: "15px 20px",
    textAlign: "center",
  },
  bottomText: {
    fontSize: "14px",
    color: "#aaa",
  },
};

export default Footer;