import {
  setCards,
  setSearchAnswerCards,
  setSearchQuestionCards,
  setSortCards,
} from 'store/actions';

export type SetCardType = ReturnType<typeof setCards>;
export type SetSortCardType = ReturnType<typeof setSortCards>;
export type SetSearchQuestionType = ReturnType<typeof setSearchQuestionCards>;
export type SetSearchAnswerType = ReturnType<typeof setSearchAnswerCards>;

export type CardsActionType =
  | SetCardType
  | SetSortCardType
  | SetSearchQuestionType
  | SetSearchAnswerType;
