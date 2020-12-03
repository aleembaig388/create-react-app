import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
  if (products.loading) {
    return (
      <div
        className="flex"
        style={{ minHeight: "200px", justifyContent: "center" }}
      >
        <div className="loader"></div>
      </div>
    );
  }
  if (products.data) {
    return (
      <section>
        <div id="featured-products">
          {products.data.map((item) => {
            return (
              <p className="shadow">
                <h3 className="font-bold">{item.name}</h3>
                <img src={item.avatar} alt="" />
                <Link to={"/product/" + item.id}>See more deals</Link>
              </p>
            );
          })}
        </div>
      </section>
    );
  } else {
    return <div></div>;
  }
}

export default FeaturedProducts;
