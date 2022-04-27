import bossPuzzle from "./../icons/BossPuzzle.png";
import pair from "./../icons/Pair.png";
import snake from "./../icons/Snake.png";
import bubbles from "./../icons/bubbles.png";
import book from "./../icons/book.png";
import pen from "./../icons/pen.png";
import clock from "./../icons/clock.png";
import feel from "./../icons/feel.png";
import bottle from "./../icons/bottle.png";
import { ICard } from "../types/types";

export const games = [
  {
    img: bossPuzzle,
    gameName: "BossPuzzle",
    gameRoute: "/BossPuzzle",
  },
  {
    img: pair,
    gameName: "Pair",
    gameRoute: "/Pair",
  },
  {
    img: snake,
    gameName: "Snake",
    gameRoute: "/Snake",
  },
  {
    img: "https://images.pexels.com/photos/277124/pexels-photo-277124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    gameName: "InProgress",
    gameRoute: "/InProgress",
  },
];

export const main = "Main";

export const arrayCards: ICard[] = [
  {
    id: 0,
    icon: bubbles,
    open: false,
    guessed: false,
  },
  {
    id: 1,
    icon: bubbles,
    open: false,
    guessed: false,
  },
  {
    id: 2,
    icon: book,
    open: false,
    guessed: false,
  },
  {
    id: 3,
    icon: book,
    open: false,
    guessed: false,
  },
  {
    id: 4,
    icon: pen,
    open: false,
    guessed: false,
  },
  {
    id: 5,
    icon: pen,
    open: false,
    guessed: false,
  },
  {
    id: 6,
    icon: clock,
    open: false,
    guessed: false,
  },
  {
    id: 7,
    icon: clock,
    open: false,
    guessed: false,
  },
  {
    id: 8,
    icon: feel,
    open: false,
    guessed: false,
  },
  {
    id: 9,
    icon: feel,
    open: false,
    guessed: false,
  },
  {
    id: 10,
    icon: bottle,
    open: false,
    guessed: false,
  },
  {
    id: 11,
    icon: bottle,
    open: false,
    guessed: false,
  },
];
