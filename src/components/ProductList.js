import React, { useState } from "react";
import products from "../assets/products.json";

export const ProductList = ({ fromPrice, toPrice }) => {
  const [showId, setShowId] = useState(true);
  const [showName, setShowName] = useState(true);
  const [showDepartment, setShowDepartment] = useState(true);
  const [showPrice, setShowPrice] = useState(true);

  const handleChange = (set, state) => {
    set(!state);
  };
  let productsCounter = 0;
  const productsTable = products.map((product, index) => {
    product.price >= fromPrice && product.price <= toPrice && productsCounter++;
    return (
      product.price >= fromPrice &&
      product.price <= toPrice && (
        <tr key={index}>
          {showId && <th> {product.id}</th>}
          {showName && <th> {product.name}</th>}
          {showDepartment && <th> {product.department}</th>}
          {showPrice && <th>{product.currency + product.price}</th>}
        </tr>
      )
    );
  });

  console.log(products);
  return (
    <div id="product-list">
      <header>
        <strong>Product List ({productsCounter} items)</strong>
      </header>
      <label>
        <input
          type="checkbox"
          showId={showId}
          defaultChecked={showId}
          onChange={() => handleChange(setShowId, showId)}
        />
        ID
      </label>
      <label>
        <input
          type="checkbox"
          showId={showName}
          defaultChecked={showName}
          onChange={() => handleChange(setShowName, showName)}
        />
        Name
      </label>
      <label>
        <input
          type="checkbox"
          showId={showDepartment}
          defaultChecked={showDepartment}
          onChange={() => handleChange(setShowDepartment, showDepartment)}
        />
        Department
      </label>
      <label>
        <input
          type="checkbox"
          showId={showPrice}
          defaultChecked={showPrice}
          onChange={() => handleChange(setShowPrice, showPrice)}
        />
        Price
      </label>

      <table>
        <thead>
          <tr>
            {showId && <th>ID</th>}
            {showName && <th>Name</th>}
            {showDepartment && <th>Department</th>}
            {showPrice && <th>Price</th>}
          </tr>
        </thead>
        <tbody>{productsTable}</tbody>
      </table>
    </div>
  );
};
