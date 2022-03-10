import { createStore } from "redux";
import { bossPuzzleReducer } from "./reducers/bossPuzzleReducer";

export let store = createStore(bossPuzzleReducer);

export type RootState = ReturnType<typeof store.getState>;
