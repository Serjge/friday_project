import {
  rerenderCardAC,
  setCards,
  setSearchAnswerCards,
  setSearchQuestionCards,
  setSortCards,
} from 'store/actions';
import { setCurrentPageCardsAC, setPageCountCardsAC } from 'store/actions/cardsAction';

export type SetCardType = ReturnType<typeof setCards>;
export type SetSortCardType = ReturnType<typeof setSortCards>;
export type SetSearchQuestionType = ReturnType<typeof setSearchQuestionCards>;
export type SetSearchAnswerType = ReturnType<typeof setSearchAnswerCards>;
export type rerenderCardType = ReturnType<typeof rerenderCardAC>;
export type setPageCountCardsType = ReturnType<typeof setPageCountCardsAC>;
export type setCurrentPageCardsType = ReturnType<typeof setCurrentPageCardsAC>;

export type CardsActionType =
  | SetCardType
  | SetSortCardType
  | SetSearchQuestionType
  | SetSearchAnswerType
  | rerenderCardType
  | setPageCountCardsType
  | setCurrentPageCardsType;
