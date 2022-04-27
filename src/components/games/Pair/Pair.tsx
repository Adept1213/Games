import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Card from "./Card";
import Congratulations from "./Congratulations";
import "./pair.css";

const Pair = () => {
  const store = useSelector((store: RootState) => store.pair);
  const count = store.filter(({ guessed }) => guessed === true).length;

  return (
    <div className="pair">
      <div className="cards">
        {store.map((elem) => (
          <Card key={elem.id} {...elem} />
        ))}
        {count === 12 && <Congratulations />}
      </div>
    </div>
  );
};

export default Pair;
