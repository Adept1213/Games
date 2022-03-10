import "./index.css";
import React from "react";
import { IGamesCart } from "../../../types/types";
import { NavLink } from "react-router-dom";

const GameCart = ({ img, gameName, gameRoute }: IGamesCart) => {
  return (
    <NavLink to={gameRoute} className="GameCart__NavLink">
      <div className="GameCart">
        <img className="GameCart__img" src={img} alt="oops" />
        <div className="GameCart__gameName">
          <span>{gameName}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default GameCart;
