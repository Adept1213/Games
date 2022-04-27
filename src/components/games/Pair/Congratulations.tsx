import "./pair.css";
import React, { memo } from "react";
import { actionStartNewGame } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux";

const Congratulations = () => {
  const dispatch = useDispatch();
  const handlerCongratulations = () => dispatch(actionStartNewGame());
  return (
    <div className="congratulations" onClick={handlerCongratulations}>
      Congratulations
      <br />
      click for try again
    </div>
  );
};

export default React.memo(Congratulations);
