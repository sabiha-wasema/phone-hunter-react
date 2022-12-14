import "./Shop.css";
import React, { useState, useEffect } from "react";
import Product from "../Product/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(" https://openapi.programming-hero.com/api/phones?search=iphone")
      .then(res => res.json())
      .then(data => setProducts(data.data));
  }, []);

  const handleProduct = product => {
    // console.log("clicked");
    const newCart = [...cart, product];
    setCart(newCart);
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
          <h3 className="mt-4">
            Cart section: {cart.length}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Shop;
