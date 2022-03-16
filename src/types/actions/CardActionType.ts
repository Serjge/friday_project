import { setCard, setSearchAnswer, setSearchQuestion, setSortCard } from 'store/actions';

export type SetCardType = ReturnType<typeof setCard>;
export type SetSortCardType = ReturnType<typeof setSortCard>;
export type SetSearchQuestionType = ReturnType<typeof setSearchQuestion>;
export type SetSearchAnswerType = ReturnType<typeof setSearchAnswer>;

export type CardActionType =
  | SetCardType
  | SetSortCardType
  | SetSearchQuestionType
  | SetSearchAnswerType;
