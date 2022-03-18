import {
  SET_CARDS,
  SET_SEARCH_ANSWER_CARDS,
  SET_SEARCH_QUESTION_CARDS,
  SET_SORT_CARDS,
  CardsActionType,
} from 'store/actions';
import { CardsType } from 'types';

export type InitialStateType = {
  pack: CardsType;
  sort: string;
  searchAnswer: string;
  searchQuestion: string;
};

const initialState: InitialStateType = {
  pack: {} as CardsType,
  sort: '',
  searchAnswer: '',
  searchQuestion: '',
};

export const cardsReducer = (
  state = initialState,
  action: CardsActionType,
): InitialStateType => {
  switch (action.type) {
    case SET_CARDS:
      return { ...state, pack: action.cards };
    case SET_SORT_CARDS:
      return { ...state, sort: action.sort };
    case SET_SEARCH_ANSWER_CARDS:
      return { ...state, searchAnswer: action.searchValue };
    case SET_SEARCH_QUESTION_CARDS:
      return { ...state, searchQuestion: action.searchValue };
    default:
      return state;
  }
};
