import React, { useContext } from "react";
import SelectCard from "./SelectCard";
import { Context } from "./Context";
import ShowCard from "./showCard";
import { useState } from "react";

function Nav() {
  const { selectProdcut, setSelectProduct } = useContext(Context);
  const [showCard, setShowCard] = useState(true);
  const [showSelect, setShowSelect] = useState(false);

  const [itemNo, setItemNo] = useState(0);

  //for dom

  const showSelcetItem = () => {
    setShowCard(!showCard);
    setShowSelect(!showSelect);
  };

  const increase = () => {
    setItemNo(itemNo + 1);
  };
  const decrease = () => {
    setItemNo(itemNo - 1);
  };

  return (
    <>
      <nav>
        <h1>Goh Shop</h1>
        <div className="icon-container">
          <i
            className="fa-solid fa-cart-shopping shopIcon"
            onClick={showSelcetItem}
          ></i>
          <p className="itemNo">{itemNo}</p>
        </div>
      </nav>

      <div className="container grid grid--3--cols">
        {showCard && <ShowCard increase={increase} />}
      </div>
      {showSelect && (
        <SelectCard
          selectProdcut={selectProdcut}
          setSelectProduct={setSelectProduct}
          decrease={decrease}
        />
      )}
    </>
  );
}

export default Nav;
