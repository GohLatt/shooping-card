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
  const [buy, setBuy] = useState(false);

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

  const initial = () => {
    setItemNo(0);
  };

  const btnhandle = () => {
    setBuy(false);
    setShowCard(true);
    setShowSelect(false);
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
          initial={initial}
          setBuy={setBuy}
        />
      )}

      {buy && (
        <div className="alarm-box">
          <div className="alret">
            <p className="alarm-text"> Thany you for buying</p>
            <button onClick={btnhandle} className="btn btn-ok">
              Ok
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
