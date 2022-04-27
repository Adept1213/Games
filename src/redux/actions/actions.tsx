import {
  CHANGE_PUZZLE_POSITION,
  OPEN_CLOSE_CARD,
  SNAKE_MOVE_BOTTOM,
  SNAKE_MOVE_LEFT,
  SNAKE_MOVE_RIGHT,
  SNAKE_MOVE_TOP,
  START_NEW_GAME_PAIR,
} from "../../constants/reducerConstants";

export function actionChangePuzzlePosition(position: number) {
  return {
    type: CHANGE_PUZZLE_POSITION,
    payload: position,
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
export function actionOpenCloseCard(id: number) {
  return {
    type: OPEN_CLOSE_CARD,
    payload: id,
  };
}

export function actionStartNewGame() {
  return {
    type: START_NEW_GAME_PAIR,
  };
}
