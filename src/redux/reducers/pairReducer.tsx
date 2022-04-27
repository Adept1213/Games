import { arrayCards } from "../../constants/games";
import {
  OPEN_CLOSE_CARD,
  START_NEW_GAME_PAIR,
} from "../../constants/reducerConstants";
import { ICard } from "../../types/types";

function getRandomDefaultStore(): ICard[] {
  return [...arrayCards].sort(() => Math.random() - 0.5);
}

function changeOpen(store: ICard[], id: number): ICard[] {
  const index = store.findIndex(({ id: elemId }) => id === elemId);
  const copy: ICard[] = JSON.parse(JSON.stringify(store));
  copy[index].open = true;
  const prevOpenCard: number = store.filter(({ open }) => open).length;
  const openCard: ICard[] = copy.filter(({ open }) => open);

  if (openCard.length === 2 && openCard[0].icon === openCard[1].icon) {
    openCard[0].guessed = true;
    openCard[1].guessed = true;
  }
  if (openCard.length === prevOpenCard) {
    console.log(openCard.length, prevOpenCard);
    return copy.map((elem) => {
      elem.open = false;
      return elem;
    });
  }
  if (openCard.length === 3) {
    return copy.map((elem, indexElem) => {
      elem.open = indexElem === index ? true : false;
      return elem;
    });
  }
  return copy;
}

export const pairReducer = (
  store: ICard[] = getRandomDefaultStore(),
  { type, payload }: { type: string; payload: number }
) => {
  switch (type) {
    case OPEN_CLOSE_CARD:
      return changeOpen(store, payload);
    case START_NEW_GAME_PAIR:
      return getRandomDefaultStore();
    default:
      return store;
  }
};
