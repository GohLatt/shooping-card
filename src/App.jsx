import React, { useContext } from "react";

import { Fragment } from "react";
import "./index.css";
import Nav from "./components/Nav";
import { Context } from "./components/Context";
import { useState } from "react";

const App = () => {
  const [selectProdcut, setSelectProduct] = useState([]);
  return (
    <Context.Provider value={{ selectProdcut, setSelectProduct }}>
      <Nav />
    </Context.Provider>
  );
};
export default App;
