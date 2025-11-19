import React from "react";
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Slides from "../Components/Slides";

function ProductList() {
  return (
<div>
      <TopBar />
      <Navbar />
      <div style={{ marginTop: "120px" }}>
      <Slides />
  
      </div>
    </div>


  );
}

export default ProductList;