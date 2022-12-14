import React from "react";
import "./Products.css";

const Products = props => {
  console.log(props);
  const { slug, image, phone_name, brand } = props.product;
  const { handleProduct, product } = props;
  return (
    <div className="product">
      {/* <h3>This is product</h3> */}
      <img className="img-fluid" src={image} alt="" />
      <div class="card-body">
        <h5 class="card-title">
          {phone_name}
        </h5>
        <p class="card-text">
          {brand}
        </p>

        <button onClick={() => handleProduct(product)} class="btn btn-primary">
          Add To cart <i class="fa-solid fa-cart-shopping ms-2" />
        </button>
      </div>
    </div>
  );
};

export default Products;
