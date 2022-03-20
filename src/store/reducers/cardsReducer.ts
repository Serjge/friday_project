import {
  CardsActionType,
  RERENDER_CARD,
  SET_CARDS,
  SET_SEARCH_ANSWER_CARDS,
  SET_SEARCH_QUESTION_CARDS,
  SET_SORT_CARDS,
} from 'store/actions';
import { CardsType } from 'types';

export type InitialStateType = {
  pack: CardsType;
  sort: string;
  searchAnswer: string;
  searchQuestion: string;
  flagForRerender: string[];
};

const initialState: InitialStateType = {
  pack: {} as CardsType,
  sort: '',
  searchAnswer: '',
  searchQuestion: '',
  flagForRerender: ['rerender'],
};

export const cardsReducer = (
  state = initialState,
  action: CardsActionType,
): InitialStateType => {
  switch (action.type) {
    case SET_CARDS:
      return { ...state, pack: action.payload.cards };
    case SET_SORT_CARDS:
      return { ...state, sort: action.payload.sort };
    case SET_SEARCH_ANSWER_CARDS:
      return { ...state, searchAnswer: action.payload.searchValue };
    case SET_SEARCH_QUESTION_CARDS:
      return { ...state, searchQuestion: action.payload.searchValue };
    case RERENDER_CARD:
      return { ...state, flagForRerender: { ...state.flagForRerender } };
    default:
      return state;
  }
};
