import "./Shop.css";
import React, { useState, useEffect } from "react";
import Product from "../Product/Products";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch(" https://openapi.programming-hero.com/api/phones?search=iphone")
      .then(res => res.json())
      .then(data => setProducts(data.data));
  }, []);

  const handleProduct = product => {
    // console.log("clicked");
    if (carts.length < 4) {
      const newCart = [...carts, product];
      setCarts(newCart);
    } else {
      alert("Cannot add more than 4 Product");
    }
  };

  const randomProduct = () => {
    if (carts.length > 0) {
      const random = Math.floor(Math.random() * carts.length);
      setCarts([carts[random]]);
    }
  };
  let removeAll = carts => {
    carts = [];
    setCarts(carts);
  };

  return (
    <div className="mt-4">
      <h1>
        Buy Your Favourite Phone <i class="fa-regular fa-face-smile-beam" />
      </h1>
      <div className="shop">
        <div className="product-container">
          <h3 className="mt-4">
            Product Section : {products.length}
          </h3>
          {/* {products.map(product => console.log(product))} */}
          <div className="card">
            {products.map(product =>
              <Product
                product={product}
                key={product.slug}
                handleProduct={handleProduct}
              />
            )}
          </div>
        </div>
        <div className="cart-container">
          <h4 className="mt-4">
            Selected Products: {carts.length}
          </h4>
          <div>
            {carts.map(cart => <Cart key={cart.slug} cart={cart} />)}
          </div>
          <div className="Choose">
            <button
              onClick={() => randomProduct()}
              className="btn-choose px-4 py-2 text-success mt-4"
            >
              Suggest
            </button>
          </div>
          <div>
            <button
              onClick={() => removeAll()}
              className="btn-clear text-danger px-4 py-2 mt-3"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
