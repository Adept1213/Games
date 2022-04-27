import { CHANGE_PUZZLE_POSITION } from "../../constants/reducerConstants";

const defaultStore = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
].sort(() => Math.random() - 0.5);

function changeStore(
  prev: number[],
  position: number,
  emptyPuzzleIndex: number
): number[] {
  const arr = [...prev];
  arr[position] = prev[emptyPuzzleIndex];
  arr[emptyPuzzleIndex] = prev[position];
  return arr;
}

function movePuzzle(store: number[], position: number) {
  const emptyPuzzleIndex = store.findIndex((element) => element === 16);
  switch (true) {
    case emptyPuzzleIndex + 1 === position:
      if (position === 4 || position === 8 || position === 12) {
        return store;
      }
      return changeStore(store, position, emptyPuzzleIndex);
    case emptyPuzzleIndex - 1 === position:
      if (position === 3 || position === 7 || position === 11) {
        return store;
      }
      return changeStore(store, position, emptyPuzzleIndex);
    case emptyPuzzleIndex - 4 === position:
      return changeStore(store, position, emptyPuzzleIndex);
    case emptyPuzzleIndex + 4 === position:
      return changeStore(store, position, emptyPuzzleIndex);
    default:
      return store;
  }
}

export const bossPuzzleReducer = (
  store: number[] = defaultStore,
  { type, payload }: { type: string; payload: number }
) => {
  switch (type) {
    case CHANGE_PUZZLE_POSITION:
      return movePuzzle(store, payload);
    default:
      return store;
  }
};
