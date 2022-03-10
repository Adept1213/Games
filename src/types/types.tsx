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
