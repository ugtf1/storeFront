import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        ...styles.banner,
        backgroundImage: "url('https://ugtf.org/img/sl2.png')",
      }}
    >
      <div style={styles.overlay}>
        <h1 style={styles.title}>Welcome to Storefront</h1>
        <p style={styles.subtitle}>Discover amazing products and deals</p>
      </div>
    </div>
  );
};

const styles = {
  banner: {
    width: "100vw",
    height: "600px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
    borderRadius: "10px",
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)", // semi-transparent overlay
    color: "#fff",
    padding: "20px 40px",
    borderRadius: "8px",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    margin: "0 0 10px",
  },
  subtitle: {
    fontSize: "18px",
    margin: 0,
  },
};

export default Banner;