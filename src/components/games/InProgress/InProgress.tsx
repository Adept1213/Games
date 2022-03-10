import React from "react";
import { Link } from "react-router-dom";
import "./inProgress.css";

const InProgress = () => {
  return (
    <div className="inProgress">
      <div>InProgress</div>
      <Link to="/">GoHome</Link>
    </div>
  );
};

export default InProgress;
