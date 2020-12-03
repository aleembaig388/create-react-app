import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/loader";
import ProductUI from "../components/productUI";

function FeaturedProducts() {
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });
  let URL = "https://5fc885db2af77700165ad663.mockapi.io/api/v1/product";
  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(URL)
      .then((response) => {
        setProducts({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setProducts({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [URL]);
  return (
    <React.Fragment>
      {products.loading && <Loader />}
      {products.data && (
        <section>
          <div id="featured-products">
            {products.data.map((item) => (
              <ProductUI key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </React.Fragment>
  );
}

export default FeaturedProducts;
