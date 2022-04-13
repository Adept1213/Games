import {
  CHANGE_PUZZLE_POSITION,
  SNAKE_MOVE_BOTTOM,
  SNAKE_MOVE_LEFT,
  SNAKE_MOVE_RIGHT,
  SNAKE_MOVE_TOP,
} from "../../constants/reducerConstants";
import { ISnake } from "../../types/types";

export function actionChangePuzzlePosition(store: number[]) {
  return {
    type: CHANGE_PUZZLE_POSITION,
    payload: store,
  };
}

export function actionSnakeMoveRight() {
  return {
    type: SNAKE_MOVE_RIGHT,
  };
}
export function actionSnakeMoveLeft() {
  return {
    type: SNAKE_MOVE_LEFT,
  };
}
export function actionSnakeMoveTop() {
  return {
    type: SNAKE_MOVE_TOP,
  };
}
export function actionSnakeMoveBottom() {
  return {
    type: SNAKE_MOVE_BOTTOM,
  };
}
