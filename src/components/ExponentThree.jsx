import React from "react";

const ExponentThree = ({ count }) => {
  const exponentValue = Math.pow(count, 3);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}³</p>
      <p className="exponent-result">{count} * {count} * {count} = <span className="total">{exponentValue}</span></p>
    </div>
  );
};

export default ExponentThree;
