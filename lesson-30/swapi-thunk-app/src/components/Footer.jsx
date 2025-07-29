import React from "react";
import { useDispatch } from "react-redux";
import { clearData } from "../redux/swapiSlice";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <div className="footer">
      <button onClick={() => dispatch(clearData())} className="clear-button">
        Clear
      </button>
    </div>
  );
};

export default Footer;
