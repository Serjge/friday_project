import {
  rerenderCardAC,
  setCardsAC,
  setCurrentPageCardsAC,
  setPageCountCardsAC,
  setSearchAnswerCardsAC,
  setSearchQuestionCardsAC,
  setSortCardsAC,
} from 'store/actions';
import { cardsReducer, InitialStateType } from 'store/reducers/cardsReducer';
import { CardsType, CardType } from 'types';

let initialState: InitialStateType;
let pack: CardsType;
let cards: CardType[];
let card: CardType;
let sort: string;
let searchValue: string;
const currentPage: number = 10;
const pageCount: number = 100;

beforeEach(() => {
  initialState = {
    pack: {
      // cards: [
      //   {
      //     answer: '',
      //     answerImg: '',
      //     answerVideo: '',
      //     cardsPack_id: '',
      //     comments: '',
      //     created: '',
      //     grade: 0,
      //     more_id: '',
      //     rating: 0,
      //     shots: 0,
      //     type: '',
      //     updated: '',
      //     user_id: '',
      //     __v: 0,
      //     _id: '',
      //     question: '',
      //     questionImg: '',
      //     questionVideo: '',
      //   },
      // ],
    } as CardsType,
    sort: '',
    searchAnswer: '',
    searchQuestion: '',
    rerenderFlag: ['rerender'],
  };
  card = {
    answer: '',
    answerImg: '',
    answerVideo: '',
    cardsPack_id: '',
    comments: '',
    created: 'alive',
    grade: 2,
    more_id: 'once',
    rating: 3,
    shots: 4,
    type: 'please',
    updated: 'long',
    user_id: 'red',
    __v: 5,
    _id: 'put',
    question: '',
    questionImg: '',
    questionVideo: '',
  };

  cards = [card];

  pack = {
    cards,
    minGrade: 0,
    maxGrade: 1,
    cardsTotalCount: 100,
    packUserId: '1',
    page: 13,
    pageCount: 20,
    token: 'advance',
    tokenDeathTime: 21,
  };

  sort = 'whom';

  searchValue = 'collect';
});

test('set initial Card', () => {
  // спросить о замыкании в редьюсоре

  const action = setCardsAC(pack);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.pack).toEqual(pack); //
});

test('set Cards from API', () => {
  const action = setCardsAC(pack);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.pack.cards).toBe(cards);
});

test('set sort cards value', () => {
  const action = setSortCardsAC(sort);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.sort).toBe(sort);
});

test('set search answer cards', () => {
  const action = setSearchAnswerCardsAC(searchValue);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.searchAnswer).toBe(searchValue);
});

test('set search question cards', () => {
  const action = setSearchQuestionCardsAC(searchValue);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.searchQuestion).toBe(searchValue);
});

test('rerender', () => {
  const action = rerenderCardAC();

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.rerenderFlag).not.toBe(initialState.rerenderFlag);
});

test('set current page', () => {
  const action = setCurrentPageCardsAC(currentPage);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.pack.page).toBe(currentPage);
});

test('set page count', () => {
  const action = setPageCountCardsAC(pageCount);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.pack.pageCount).toBe(pageCount);
});
