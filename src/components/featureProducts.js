import React, { useEffect } from "react";
import Loader from "../components/loader";
import ProductUI from "../components/productUI";
import { compose } from "redux";
import { connect } from "react-redux";
import * as TYPES from "../redux/types/product";

function FeaturedProducts(props) {
  const { products, getProduct } = props;

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <React.Fragment>
      {products.isLoading && <Loader />}
      {products.products && (
        <section>
          <div id="featured-products">
            {products.products.map((item) => (
              <ProductUI key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  products: state.product,
});

const mapDispatchToProps = (dispatch) => ({
  getProduct: (data) =>
    dispatch({ type: TYPES.GET_PRODUCTS_REQUEST, params: data }),
});
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  FeaturedProducts
);
