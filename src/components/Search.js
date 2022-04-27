import React from "react";

import "../styles/Search.css";

import { ProductList } from "./ProductList";
import { useFilterForm } from "./FilterForm";

export const Search = (props) => {
  const { fromPrice, toPrice, render } = useFilterForm();

  return (
    <div className="Products">
      {render}

      <ProductList {...{ fromPrice, toPrice }} />
    </div>
  );
};

export default Search;
