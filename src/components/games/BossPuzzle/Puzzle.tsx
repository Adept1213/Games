import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { actionChangePuzzlePosition } from "../../../redux/actions/actions";
import "./bossPuzzle.css";

const Puzzle = ({
  textNumber,
  position,
}: {
  textNumber: number;
  position: number;
}) => {
  const dispatch = useDispatch();
  const handler = () => dispatch(actionChangePuzzlePosition(position));

  return (
    <div className="bossPuzzle__puzzle" onClick={handler}>
      {textNumber}
    </div>
  );
};

export default memo(Puzzle);
