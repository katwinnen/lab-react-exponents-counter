import React from "react";

const ExponentSix = ({ count }) => {
  const exponentValue = Math.pow(count, 6);

  return (
    <div className="exponent-counter-container">
        <p className="exponent-label">{count}⁶</p> 
        <p className="exponent-result">{count} * {count} * {count} * {count} * {count} * {count} = <span className="total">{exponentValue}</span></p>
    </div>
  );
};

export default ExponentSix;
