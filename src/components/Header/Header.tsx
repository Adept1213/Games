import "./index.css";
import React from "react";
import { useLocation } from "react-router";
import { games, main } from "../../constants/games";

function getNameForPath(location: string) {
  const [
    { gameRoute: BossPuzzleRoute, gameName: BossPuzzle },
    { gameRoute: PairRoute, gameName: Pair },
    { gameRoute: SnakeRoute, gameName: Snake },
    { gameRoute: InProgressRoute, gameName: InProgress },
  ] = games;
  switch (location) {
    case BossPuzzleRoute:
      return BossPuzzle;
    case PairRoute:
      return Pair;
    case SnakeRoute:
      return Snake;
    case InProgressRoute:
      return InProgress;
    default:
      return main;
  }
}

const Header = () => {
  const { pathname } = useLocation();
  return <div className="header">{getNameForPath(pathname)}</div>;
};

export default Header;
