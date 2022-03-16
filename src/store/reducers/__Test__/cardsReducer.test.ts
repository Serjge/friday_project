import {
  setCards,
  setCurrentPageAC,
  setPageCountAC,
  setSearchPack,
  setSort,
} from 'store/actions';
import { cardsReducer, InitialStateType } from 'store/reducers/cardsReducer';
import { CardsPackType, CardType } from 'types';

let initialState: InitialStateType;
let packs: CardsPackType;
let cards: CardType[];
let sort: string;
let searchPack: string;
const currentPage: number = 10;
const pageCount: number = 100;

beforeEach(() => {
  initialState = {
    packs: {} as CardsPackType,
    sort: '',
    searchPack: '',
  };

  cards = [
    {
      cardsCount: 1,
      created: 'alive',
      grade: 2,
      more_id: 'once',
      name: 'pardon',
      path: 'journey',
      private: false,
      rating: 3,
      shots: 4,
      type: 'please',
      updated: 'long',
      user_id: 'red',
      user_name: 'narrow',
      __v: 5,
      _id: 'put',
    },
  ];

  packs = {
    cardPacks: cards,
    cardPacksTotalCount: 10,
    maxCardsCount: 11,
    minCardsCount: 12,
    page: 13,
    pageCount: 20,
    token: 'advance',
    tokenDeathTime: 21,
  };
  sort = 'fame';
  searchPack = 'page';
});

test('set Cards from API', () => {
  const action = setCards(packs);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.packs).toBe(packs);
  expect(endState.packs.cardPacks).toBe(cards);
});

test('change sort value for cards', () => {
  const action = setSort(sort);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.sort).toBe(sort);
});

test('set value for search pack', () => {
  const action = setSearchPack(searchPack);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.searchPack).toBe(searchPack);
});

test('set current page', () => {
  const action = setCurrentPageAC(currentPage);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.packs.page).toBe(currentPage);
});

test('set page count', () => {
  const action = setPageCountAC(pageCount);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.packs.pageCount).toBe(pageCount);
});
