import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import "./bossPuzzle.css";
import Puzzle from "./Puzzle";

const BossPuzzle = () => {
  const store = useSelector((store: RootState) => store);
  const emptyPuzzleIndex = store.findIndex((element) => element === 16);

  return (
    <div className="bossPuzzle">
      <div className="bossPuzzle__container">
        <div className="bossPuzzle__puzzleField">
          {store.map((textNumber, index) =>
            textNumber !== 16 ? (
              <Puzzle
                key={index}
                textNumber={textNumber}
                position={index}
                store={store}
                emptyPuzzleIndex={emptyPuzzleIndex}
              />
            ) : (
              <div className="bossPuzzle__whitePuzzle" key={textNumber}></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default BossPuzzle;
