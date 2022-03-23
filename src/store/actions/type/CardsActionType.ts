import {
  rerenderCardAC,
  setCardsAC,
  setSearchAnswerCardsAC,
  setSearchQuestionCardsAC,
  setSortCardsAC,
} from 'store/actions';
import { setCurrentPageCardsAC, setPageCountCardsAC } from 'store/actions/cardsAction';

export type SetCardType = ReturnType<typeof setCardsAC>;
export type SetSortCardType = ReturnType<typeof setSortCardsAC>;
export type SetSearchQuestionType = ReturnType<typeof setSearchQuestionCardsAC>;
export type SetSearchAnswerType = ReturnType<typeof setSearchAnswerCardsAC>;
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
