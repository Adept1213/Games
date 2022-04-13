import {
  SNAKE_MOVE_BOTTOM,
  SNAKE_MOVE_LEFT,
  SNAKE_MOVE_RIGHT,
  SNAKE_MOVE_TOP,
} from "../../constants/reducerConstants";
import { ISnake, ISnakeStore } from "../../types/types";

function giveRandomPosition() {
  return Math.floor(Math.random() * 28) * 20;
}

function checkEat(eat: ISnake, head: ISnake) {
  return eat.x === head.x && eat.y === head.y;
}

const defaultStore: ISnakeStore = {
  score: 0,
  eat: { x: giveRandomPosition(), y: giveRandomPosition() },
  snake: [
    { x: 280, y: 280 },
    { x: 300, y: 280 },
    { x: 320, y: 280 },
  ],
};

function moveRight({ snake, eat, score }: ISnakeStore): ISnakeStore {
  const copy: ISnake[] = [...snake];
  let lastElement = copy[copy.length - 1];

  if (checkEat(eat, lastElement)) {
    eat.x = giveRandomPosition();
    eat.y = giveRandomPosition();
    score += 1;
    copy.push({
      x: lastElement.x > 520 ? 0 : lastElement.x + 20,
      y: lastElement.y,
    });
    return { score, eat, snake: [...copy] };
  }

  copy.shift();
  copy.push({
    x: lastElement.x > 520 ? 0 : lastElement.x + 20,
    y: lastElement.y,
  });
  return { score, eat, snake: [...copy] };
}
function moveLeft({ snake, eat, score }: ISnakeStore) {
  const copy: ISnake[] = [...snake];
  let lastElement = copy[copy.length - 1];

  if (checkEat(eat, lastElement)) {
    eat.x = giveRandomPosition();
    eat.y = giveRandomPosition();
    score += 1;
    copy.push({
      x: lastElement.x < 20 ? 540 : lastElement.x - 20,
      y: lastElement.y,
    });
    return { score, eat, snake: [...copy] };
  }

  copy.shift();
  copy.push({
    x: lastElement.x < 20 ? 540 : lastElement.x - 20,
    y: lastElement.y,
  });
  return { score, eat, snake: [...copy] };
}
function moveTop({ snake, eat, score }: ISnakeStore) {
  const copy: ISnake[] = [...snake];
  let lastElement = copy[copy.length - 1];

  if (checkEat(eat, lastElement)) {
    eat.x = giveRandomPosition();
    eat.y = giveRandomPosition();
    score += 1;
    copy.push({
      x: lastElement.x,
      y: lastElement.y < 20 ? 540 : lastElement.y - 20,
    });
    return { score, eat, snake: [...copy] };
  }

  copy.shift();
  copy.push({
    x: lastElement.x,
    y: lastElement.y < 20 ? 540 : lastElement.y - 20,
  });
  return { score, eat, snake: [...copy] };
}
function moveBottom({ snake, eat, score }: ISnakeStore) {
  const copy: ISnake[] = [...snake];
  let lastElement = copy[copy.length - 1];

  if (checkEat(eat, lastElement)) {
    eat.x = giveRandomPosition();
    eat.y = giveRandomPosition();
    score += 1;
    copy.push({
      x: lastElement.x,
      y: lastElement.y > 520 ? 0 : lastElement.y + 20,
    });
    return { score, eat, snake: [...copy] };
  }

  copy.shift();
  copy.push({
    x: lastElement.x,
    y: lastElement.y > 520 ? 0 : lastElement.y + 20,
  });
  return { score, eat, snake: [...copy] };
}

export const snakeReducer = (
  store: ISnakeStore = defaultStore,
  { type }: { type: string; payload: ISnake[] }
) => {
  switch (type) {
    case SNAKE_MOVE_RIGHT:
      return moveRight(store);
    case SNAKE_MOVE_LEFT:
      return moveLeft(store);
    case SNAKE_MOVE_TOP:
      return moveTop(store);
    case SNAKE_MOVE_BOTTOM:
      return moveBottom(store);
    default:
      return store;
  }
};
