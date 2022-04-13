import { createStore, combineReducers } from "redux";
import { bossPuzzleReducer } from "./reducers/bossPuzzleReducer";
import { snakeReducer } from "./reducers/snakeReducer";

const rootReducer = combineReducers({
  bossPuzzle: bossPuzzleReducer,
  snake: snakeReducer,
});

export let store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
