import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "./Context";

import { Data } from "../components/Data";

function ShowCard({ increase }) {
  const [products, setProducts] = useState(Data);
  const { selectProdcut, setSelectProduct } = useContext(Context);

  const addToCart = (productId) => {
    setSelectProduct((p) => [...p, products.find((p) => p.id == productId)]);

    //parent state handle
    increase();
  };

  return products.map((product) => (
    <div className="box" key={product.id}>
      <img src={product.category.image} className="product-img" />
      <div className="text-box">
        <p className="text">{product.category.name}</p>
        <p className="price">$ {product.price}</p>
        <button className="btn btn-add" onClick={() => addToCart(product.id)}>
          + Add to cart
        </button>
      </div>
    </div>
  ));
}

export default ShowCard;
