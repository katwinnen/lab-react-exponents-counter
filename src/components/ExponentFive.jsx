import React from "react";

const ExponentFive = ({ count }) => {
  const exponentValue = Math.pow(count, 5);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁵</p>
      <p className="exponent-result">{count} * {count} * {count} * {count} * {count} = <span className="total">{exponentValue}</span></p>
    </div>
  );
};

export default ExponentFive;