import React, { useState } from "react";

export const useFilterForm = () => {
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(999);

  const onPriceInputChange = (e) => {
    setFromPrice(e.target.value);
  };

  const toPriceInputChange = (e) => {
    setToPrice(e.target.value);
  };

  return {
    fromPrice,
    toPrice,
    render: (
      <div>
        <label htmlFor="priceFrom">Price From:</label>
        <input
          type="number"
          id="priceFrom"
          name="priceFrom"
          placeholder="Price from..."
          onChange={onPriceInputChange}
          InitialValue={fromPrice}
        />
        <label htmlFor="priceTo">Price To:</label>
        <input
          type="number"
          id="priceTo"
          name="priceTo"
          placeholder="Price to..."
          onChange={toPriceInputChange}
          InitialValue={toPrice}
        />
      </div>
    ),
  };
};
