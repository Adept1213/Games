import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionSnakeMoveBottom,
  actionSnakeMoveLeft,
  actionSnakeMoveRight,
  actionSnakeMoveTop,
} from "../../../redux/actions/actions";
import { RootState } from "../../../redux/store";
import { ISnake } from "../../../types/types";
import "./snake.css";

function checkHeadCrosse(snakePosition: ISnake[]) {
  const copyWithoutHead: ISnake[] = snakePosition.slice(0, -1);
  const { x: xHead, y: yHead } = snakePosition[snakePosition.length - 1];
  return copyWithoutHead.some(({ x, y }) => x === xHead && y === yHead);
}
const duration = 100;
let interval: NodeJS.Timeout;

const Snake = () => {
  const snakePosition = useSelector((store: RootState) => store.snake.snake);
  const eatPosition = useSelector((store: RootState) => store.snake.eat);
  const score = useSelector((store: RootState) => store.snake.score);
  const dispatch = useDispatch();

  function changeDirection({ code }: KeyboardEvent) {
    clearInterval(interval);
    switch (code) {
      case "ArrowUp":
        interval = setInterval(() => dispatch(actionSnakeMoveTop()), duration);
        break;
      case "ArrowDown":
        interval = setInterval(
          () => dispatch(actionSnakeMoveBottom()),
          duration
        );
        break;
      case "ArrowLeft":
        interval = setInterval(() => dispatch(actionSnakeMoveLeft()), duration);
        break;
      case "ArrowRight":
        interval = setInterval(
          () => dispatch(actionSnakeMoveRight()),
          duration
        );
        break;
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", changeDirection);
    return () => {
      document.removeEventListener("keydown", changeDirection);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (checkHeadCrosse(snakePosition)) {
      clearInterval(interval);
      document.removeEventListener("keydown", changeDirection);
    }
  });

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
