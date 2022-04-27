import React from "react";
import { useSnakeMove } from "./hooks";
import "./snake.css";

const Snake = () => {
  const { eatPosition, snakePosition, score } = useSnakeMove();

  return (
    <div className="snakeWrapper">
      <div className="wrapperField">
        <div className="snakeScore">{score}</div>
        <div className="snakeField">
          <div
            className="snakeEat"
            style={{ left: eatPosition.x, top: eatPosition.y }}
          ></div>
          {snakePosition.map((element, index) =>
            index === snakePosition.length - 1 ? (
              <div
                className="snakeBodyFirst"
                key={index}
                style={{ left: element.x, top: element.y }}
              ></div>
            ) : (
              <div
                className="snakeBody"
                key={index}
                style={{ left: element.x, top: element.y }}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Snake;
