import { Dispatch } from "react";
import { actionChangePuzzlePosition } from "../../../redux/actions/actions";

export const puzzleHandler = (
  store: number[],
  position: number,
  emptyPuzzleIndex: number,
  dispatch: Dispatch<any>
) => {
  switch (true) {
    case emptyPuzzleIndex + 1 === position:
      if (position === 4 || position === 8 || position === 12) {
        return;
      }
      changeState(store, position, emptyPuzzleIndex, dispatch);
      break;
    case emptyPuzzleIndex - 1 === position:
      if (position === 3 || position === 7 || position === 11) {
        return;
      }
      changeState(store, position, emptyPuzzleIndex, dispatch);
      break;
    case emptyPuzzleIndex - 4 === position:
      changeState(store, position, emptyPuzzleIndex, dispatch);
      break;
    case emptyPuzzleIndex + 4 === position:
      changeState(store, position, emptyPuzzleIndex, dispatch);
      break;
    default:
      break;
  }
};

function changeState(
  prev: number[],
  position: number,
  emptyPuzzleIndex: number,
  dispatch: Dispatch<any>
) {
  const arr = [...prev];
  arr[position] = prev[emptyPuzzleIndex];
  arr[emptyPuzzleIndex] = prev[position];
  dispatch(actionChangePuzzlePosition(arr));
}
