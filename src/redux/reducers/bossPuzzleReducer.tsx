import { CHANGE_PUZZLE_POSITION } from "../../constants/reducerConstants";

const defaultStore = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
].sort(() => Math.random() - 0.5);

export const bossPuzzleReducer = (
  store: number[] = defaultStore,
  { type, payload }: { type: string; payload: number[] }
) => {
  switch (type) {
    case CHANGE_PUZZLE_POSITION:
      return payload;
    default:
      return store;
  }
};
