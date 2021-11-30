import React from "react";
import NavBar from "../../components/navBar";
import Product from "./components/productCard";

export const ProductList = () => {
  return (
    <div>
      <NavBar />
      <div class="container m-2">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <Product />
          </div>
          <div class="col">
            <Product />
          </div>
          <div class="col">
            <Product />
          </div>
          <div class="col">
            <Product />
          </div>
          <div class="col">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};
