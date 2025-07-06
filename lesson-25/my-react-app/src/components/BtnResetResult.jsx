import React from "react";

const BtnResetResult = ({ onReset }) => {
  return (
    <button onClick={onReset} className="btn-reset">
      Clear results
    </button>
  );
};

export default BtnResetResult;
