import React from "react";

const BtnShowResult = ({ onShow }) => {
  return (
    <button onClick={onShow} className="btn-show">
      Show Results
    </button>
  );
};

export default BtnShowResult;
