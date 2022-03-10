import React from "react";
import { useDispatch } from "react-redux";
import { IPuzzle } from "../../../types/types";
import "./bossPuzzle.css";
import { puzzleHandler } from "./helpers";

const Puzzle = ({ textNumber, position, store, emptyPuzzleIndex }: IPuzzle) => {
  const dispatch = useDispatch();

  return (
    <div
      className="bossPuzzle__puzzle"
      onClick={() => puzzleHandler(store, position, emptyPuzzleIndex, dispatch)}
    >
      {textNumber}
    </div>
  );
};

export default Puzzle;
