import GameCart from "../GameCart/GameCart";
import "./index.css";
import React from "react";
import { games } from "../../../constants/games";

const ChoiceGame = () => {
  return (
    <div className="choiceGame">
      {games.map(({ img, gameName, gameRoute }, index) => (
        <GameCart
          key={index}
          img={img}
          gameName={gameName}
          gameRoute={gameRoute}
        />
      ))}
    </div>
  );
};

export default ChoiceGame;
