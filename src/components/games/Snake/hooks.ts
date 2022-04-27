import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSnakeMoveBottom, actionSnakeMoveLeft, actionSnakeMoveRight, actionSnakeMoveTop } from "../../../redux/actions/actions";
import { RootState } from "../../../redux/store";
import { ISnake } from "../../../types/types";

function checkHeadCrosse(snakePosition: ISnake[]) {
    const copyWithoutHead: ISnake[] = snakePosition.slice(0, -1);
    const { x: xHead, y: yHead } = snakePosition[snakePosition.length - 1];
    return copyWithoutHead.some(({ x, y }) => x === xHead && y === yHead);
  }
  const duration = 100;

export const useSnakeMove = () => {
    let interval = useRef<number>();
    const snakePosition = useSelector((store: RootState) => store.snake.snake);
    const eatPosition = useSelector((store: RootState) => store.snake.eat);
    const score = useSelector((store: RootState) => store.snake.score);
    const dispatch = useDispatch();
  
    function changeDirection({ code }: KeyboardEvent) {
      clearInterval(interval.current);
      switch (code) {
        case "ArrowUp":
          interval.current = window.setInterval(() => dispatch(actionSnakeMoveTop()), duration);
          break;
        case "ArrowDown":
          interval.current = window.setInterval(
            () => dispatch(actionSnakeMoveBottom()),
            duration
          );
          break;
        case "ArrowLeft":
          interval.current = window.setInterval(() => dispatch(actionSnakeMoveLeft()), duration);
          break;
        case "ArrowRight":
          interval.current = window.setInterval(
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
        clearInterval(interval.current);
      };
    }, []);
  
    useEffect(() => {
      if (checkHeadCrosse(snakePosition)) {
        clearInterval(interval.current);
        document.removeEventListener("keydown", changeDirection);
      }
    });

    return {score, eatPosition, snakePosition}
}
