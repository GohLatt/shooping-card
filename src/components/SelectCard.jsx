import React from "react";
import { useReducer } from "react";

const ACTION = {
  INCREASE: "increase",
  DECREASE: "decrease",
  DELETE: "delete",
  ALL: "buyall",
};

function reducer(products, action) {
  switch (action.type) {
    case ACTION.INCREASE:
      return products.map((p) => {
        if (p.id === action.payload.id) {
          return { ...p, count: p.count + 1, price: p.calPrice + p.price };
        }
        return p;
      });

    case ACTION.DECREASE:
      return products.map((p) => {
        if (p.id === action.payload.id) {
          return { ...p, count: p.count - 1, price: p.price - p.calPrice };
        }
        return p;
      });

    case ACTION.DELETE:
      return products.filter((p) => p.id !== action.payload.id);

    case ACTION.ALL:
      return (products = []);

    default:
      products;
  }
}
function SelectCard({
  selectProdcut,
  setSelectProduct,
  decrease,
  initial,
  setBuy,
}) {
  const [products, dispatch] = useReducer(reducer, selectProdcut);

  const btnIncrease = (productId) => {
    dispatch({ type: ACTION.INCREASE, payload: { id: productId } });
  };

  const btnDecrease = (productId) => {
    dispatch({ type: ACTION.DECREASE, payload: { id: productId } });
  };

  const deleteSelect = (productId) => {
    dispatch({ type: ACTION.DELETE, payload: { id: productId } });
    decrease();
    setSelectProduct(selectProdcut.filter((p) => p.id !== productId));
  };

  const btnAll = () => {
    dispatch({ type: ACTION.ALL });
    setSelectProduct([]);
    initial();
    setBuy(true);
  };

  return (
    <div className="cards">
      {products &&
        products.map((product) => (
          <div className="card" key={product.id}>
            <div className="selectItem">
              <div className="img-box">
                <img src={product.category.image} />
              </div>
              <div className="incre-decrea-box">
                <button
                  className="icon-btn"
                  onClick={() => btnDecrease(product.id)}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <p>{product.count}</p>
                <button
                  className="icon-btn"
                  onClick={() => btnIncrease(product.id)}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
              <p className="selectProductPrice">$ {product.price}</p>
            </div>
            <div className="deleteIcon">
              <i
                className="fa-solid fa-xmark"
                onClick={() => deleteSelect(product.id)}
              ></i>
            </div>
          </div>
        ))}
      <div className="total-price">
        <div className="price-total">
          <p>Total</p>
          <p className="totalprice">
            $ {products.map((p) => p.price).reduce((acc, val) => acc + val, 0)}
          </p>
        </div>
        <button className="btn btn-buy" onClick={btnAll}>
          Buy all
        </button>
      </div>
    </div>
  );
}

export default SelectCard;
