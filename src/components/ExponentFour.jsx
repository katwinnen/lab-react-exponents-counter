import React from "react";

const ExponentFour = ({ count }) => {
  const exponentValue = Math.pow(count, 4);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁴</p>
      <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">{exponentValue}</span></p>
    </div>
  );
};

export default ExponentFour;