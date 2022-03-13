import { SET_CARDS } from 'store/actions';
import { CardType } from 'types';
import { CardsActionType } from 'types/actions';

export type InitialStateType = {
  cardPacks: CardType[];
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
  token: string;
  tokenDeathTime: number;
};

const initialState: InitialStateType = {} as InitialStateType;

export const cardsReducer = (
  state = initialState,
  action: CardsActionType,
): InitialStateType => {
  switch (action.type) {
    case SET_CARDS:
      return { ...action.payload.cards };
    default:
      return state;
  }
};
