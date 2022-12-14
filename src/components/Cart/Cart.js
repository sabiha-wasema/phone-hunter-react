import React from "react";
import "./Cart.css";
import { useState } from "react";

const Cart = props => {
  //   console.log(props);
  const { image, slug, phone_name, brand } = props.cart;

  const clearCart = item => {
    console.log("clicked");
  };
  return (
    <div>
      <div className="cart-item mt-5">
        <img src={image} alt="" />
        <h4>
          {phone_name}
        </h4>
        <button onClick={() => clearCart(props.cart)} className="w-50 mx-auto">
          <i class="fa-solid fa-trash text-danger" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
