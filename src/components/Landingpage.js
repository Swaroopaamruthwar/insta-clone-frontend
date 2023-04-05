import React from "react";
import img from "./lens-1418954.png";
import "./Landingpage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Landingpage() {
  const navigate = useNavigate();
  function Handler() {
    navigate("/createpost");
  }
  return (
    <div className="flex">
      <div className="child">
        <img src={img} alt="" id="img" />
      </div>
      <div className="child">
        <h1>10x Team 04</h1>
        <button onClick={Handler}>Enter</button>
      </div>
    </div>
  );
}
