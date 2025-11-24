import React from "react";
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import ProductView from "../Components/ProdectView";

function ProductDetail() {
  return (
<div>
      <TopBar />
      <Navbar />
      <div style={{ marginTop: "120px" }}>
      <ProductView />
      <Footer />
  
      </div>
    </div>


  );
}

export default ProductDetail;