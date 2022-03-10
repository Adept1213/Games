import React from "react";
import { Link } from "react-router-dom";
import "./snake.css";

const Snake = () => {
  return (
    <div className="snake">
      <div>Snake</div>
      <Link to="/">GoMain</Link>
    </div>
  );
};

export default Snake;
