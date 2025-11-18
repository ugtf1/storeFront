import React from "react";

const TopBar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.itemLeft}>
        📍 Michigan, USA
      </div>
      <div style={styles.itemCenter}>
        📞 +1 (248) 376-4669
      </div>
      <div style={styles.itemRight}>
        ✉️ info@ugtf.org
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",              // full width
    position: "fixed",           // ✅ fixed at top
    top: 0,
    left: 0,
    zIndex: 1000,                // stays above other elements
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#002855",  // dark blue
    color: "white",
    padding: "10px 20px",
    fontSize: "14px",
    flexWrap: "wrap",            // responsive stacking
    boxSizing: "border-box",
  },
  itemLeft: {
    flex: 1,
    textAlign: "left",
    minWidth: "200px",
  },
  itemCenter: {
    flex: 1,
    textAlign: "center",
    minWidth: "200px",
  },
  itemRight: {
    flex: 1,
    textAlign: "right",
    minWidth: "200px",
  },
};

export default TopBar;