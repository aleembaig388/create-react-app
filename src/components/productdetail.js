import React from "react";

function ProductDetail(props) {
  const { product } = props;
  return (
    <section>
      <div id="featured-products" style={{ marginTop: "0px" }}>
        <p className="shadow">
          <h3 className="font-bold">{product.name}</h3>
          <img src={product.avatar} alt="" />
        </p>
      </div>
    </section>
  );
}

export default ProductDetail;
