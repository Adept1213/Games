import { CHANGE_PUZZLE_POSITION } from "../../constants/reducerConstants";

export function actionChangePuzzlePosition(store: number[]) {
  return {
    type: CHANGE_PUZZLE_POSITION,
    payload: store,
  };
}
