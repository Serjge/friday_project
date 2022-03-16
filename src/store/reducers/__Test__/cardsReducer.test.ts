import {
  setPacks,
  setCurrentPagePacksAC,
  setPageCountPacksAC,
  setSearchPack,
  setSortPacks,
} from 'store/actions';
import { packsReducer, InitialStateType } from 'store/reducers/PacksReducer';
import { PacksType, PackType } from 'types';

let initialState: InitialStateType;
let packs: PacksType;
let cards: PackType[];
let sort: string;
let searchPack: string;
const currentPage: number = 10;
const pageCount: number = 100;

beforeEach(() => {
  initialState = {
    packs: {} as PacksType,
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
  const action = setPacks(packs);

  const endState = packsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.packs).toBe(packs);
  expect(endState.packs.cardPacks).toBe(cards);
});

test('change sort value for cards', () => {
  const action = setSortPacks(sort);

  const endState = packsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.sort).toBe(sort);
});

test('set value for search pack', () => {
  const action = setSearchPack(searchPack);

  const endState = packsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.searchPack).toBe(searchPack);
});

test('set current page', () => {
  const action = setCurrentPagePacksAC(currentPage);

  const endState = packsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.packs.page).toBe(currentPage);
});

test('set page count', () => {
  const action = setPageCountPacksAC(pageCount);

  const endState = packsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.packs.pageCount).toBe(pageCount);
});
