import { createStore, combineReducers } from "redux";
import { bossPuzzleReducer } from "./reducers/bossPuzzleReducer";
import { pairReducer } from "./reducers/pairReducer";
import { snakeReducer } from "./reducers/snakeReducer";

const rootReducer = combineReducers({
  bossPuzzle: bossPuzzleReducer,
  snake: snakeReducer,
  pair: pairReducer,
});

export let store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
