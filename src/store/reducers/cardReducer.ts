import { CardsType } from 'types';
import { CardActionType } from 'types/actions';

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

export const cardReducer = (
  state = initialState,
  action: CardActionType,
): InitialStateType => {
  switch (action.type) {
    case 'CARD/SET_CARD':
      return { ...state, pack: action.card };
    case 'CARD/SET_SORT_CARD':
      return { ...state, sort: action.sort };
    case 'CARD/SET_SEARCH_ANSWER':
      return { ...state, searchAnswer: action.searchValue };
    case 'CARD/SET_SEARCH_QUESTION':
      return { ...state, searchQuestion: action.searchValue };
    default:
      return state;
  }
};
