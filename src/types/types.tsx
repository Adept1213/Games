import { RootState } from "../redux/store";

export interface IGamesCart {
  img: string;
  gameName: string;
  gameRoute: string;
}

export interface IPuzzle {
  position: number;
  textNumber: number;
  store: number[];
  emptyPuzzleIndex: number;
}

export interface ISnake {
  x: number;
  y: number;
}

export interface ISnakeStore {
  score: number;
  eat: ISnake;
  snake: ISnake[];
}

export interface ICard {
  id: number;
  icon: string;
  open: boolean;
  guessed: boolean;
}
