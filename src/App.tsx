import "./App.css";
import Main from "./components/Main/Main";
import React from "react";
import { Route, Routes } from "react-router";
import Snake from "./components/games/Snake/Snake";
import { games } from "./constants/games";
import BossPuzzle from "./components/games/BossPuzzle/BossPuzzle";
import Pair from "./components/games/Pair/Pair";
import InProgress from "./components/games/InProgress/InProgress";
import Layout from "./components/Layout/Layout";

const [
  { gameRoute: BossPuzzleRoute },
  { gameRoute: PairRoute },
  { gameName: SnakeRoute },
  { gameRoute: InProgressRoute },
] = games;

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={SnakeRoute} element={<Snake />} />
          <Route path={BossPuzzleRoute} element={<BossPuzzle />} />
          <Route path={PairRoute} element={<Pair />} />
          <Route path={InProgressRoute} element={<InProgress />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
