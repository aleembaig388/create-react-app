import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductUI from "../components/productUI";

function Product() {
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });
  const { id } = useParams();
  const URL =
    "https://5fc885db2af77700165ad663.mockapi.io/api/v1/product/" + id;

  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(URL)
      .then((response) => {
        setProduct({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setProduct({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [URL]);

  if (product.loading) {
    return (
      <div
        className="flex"
        style={{ minHeight: "200px", justifyContent: "center" }}
      >
        <div className="loader"></div>
      </div>
    );
  }
  return (
    product.data && (
      <section>
        <div id="featured-products" style={{ marginTop: "0px" }}>
          <ProductUI product={product.data} />
        </div>
      </section>
    )
  );
}

export default Product;
