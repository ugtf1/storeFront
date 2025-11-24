import React from "react";
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import ProductList from "../Components/ProductList";
import Footer from "../Components/Footer";

function Products() {
  return (
<div>
      <TopBar />
      <Navbar />
      <div style={{ marginTop: "120px" }}>
      <Banner />
      <ProductList />
      <Footer />
  
      </div>
    </div>


  );
}

export default Products;