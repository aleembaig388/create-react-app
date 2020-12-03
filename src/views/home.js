import React from "react";
import FeaturedProducts from "../components/featureProducts";
import store from "../redux/store";
import { AddBug } from "../redux/actions";
function Home() {
  console.log(store);
  store.dispatch(AddBug("Add Bug"));
  console.log(store.getState());
  return (
    <section id="banners">
      <div style={{ backgroundColor: "#eaeded" }}>
        <ul>
          <li>
            <picture>
              <source media="(max-width:640px)" srcSet="./imgs/banner-m.jpg" />
              <img
                src="./imgs/banner.jpg"
                alt="banner"
                style={{ width: "100%" }}
              />
            </picture>
          </li>
        </ul>
        <FeaturedProducts />
      </div>
    </section>
  );
}

export default Home;
