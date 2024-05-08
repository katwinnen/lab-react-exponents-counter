import React from "react";

const ExponentTwo = ({ count }) => {
  const exponentValue = Math.pow(count, 2);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}²</p>
      <p className="exponent-result">{count} * {count} * {count} = <span className="total">{exponentValue}</span></p>
    </div>
  );
};

export default ExponentTwo;

