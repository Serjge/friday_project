import {
  CardsActionType,
  RERENDER_CARD,
  SET_CARDS,
  SET_CURRENT_PAGE_CARDS,
  SET_PAGE_COUNT_CARDS,
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
  rerenderFlag: string[];
};

const initialState: InitialStateType = {
  pack: {
    cards: [
      {
        answer: '',
        answerImg: '',
        answerVideo: '',
        cardsPack_id: '',
        comments: '',
        created: '',
        grade: 0,
        more_id: '',
        rating: 0,
        shots: 0,
        type: '',
        updated: '',
        user_id: '',
        __v: 0,
        _id: '',
        question: '',
        questionImg: '',
        questionVideo: '',
      },
    ],
  } as CardsType,
  sort: '',
  searchAnswer: '',
  searchQuestion: '',
  rerenderFlag: ['rerender'],
};

export const cardsReducer = (
  state = initialState,
  action: CardsActionType,
): InitialStateType => {
  switch (action.type) {
    case SET_CARDS:
      if (action.payload.cards === null) {
        return { ...state, pack: initialState.pack };
      }
      return { ...state, pack: action.payload.cards };

    case SET_SORT_CARDS:
      return { ...state, sort: action.payload.sort };
    case SET_SEARCH_ANSWER_CARDS:
      return { ...state, searchAnswer: action.payload.searchValue };
    case SET_SEARCH_QUESTION_CARDS:
      return { ...state, searchQuestion: action.payload.searchValue };
    case RERENDER_CARD:
      return { ...state, rerenderFlag: { ...state.rerenderFlag } };
    case SET_CURRENT_PAGE_CARDS:
      return { ...state, pack: { ...state.pack, page: action.payload.currentPage } };
    case SET_PAGE_COUNT_CARDS:
      return { ...state, pack: { ...state.pack, pageCount: action.payload.pageCount } };
    default:
      return state;
  }
};
