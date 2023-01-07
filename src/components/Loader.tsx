import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <span className="blink">Loading...</span>
      <div className="cl1"></div>
      <div className="cl1 cl2"></div>
      <div className="cl1 cl3"></div>
      <div className="cl1 cl4"></div>
    </div>
  )
};

export default Loader;
