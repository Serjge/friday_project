import { setCards, setSearchAnswerCards, setSortCards } from 'store/actions';
import { cardsReducer, InitialStateType } from 'store/reducers/cardsReducer';
import { CardsType, CardType } from 'types';

let initialState: InitialStateType;
let pack: CardsType;
let cards: CardType[];
let card: CardType;
let sort: string;
let searchValue: string;

beforeEach(() => {
  initialState = {
    pack: {} as CardsType,
    sort: '',
    searchAnswer: '',
    searchQuestion: '',
    flagForRerender: ['rerender'],
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

test('set Cards from API', () => {
  const action = setCards(pack);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.pack.cards).toBe(cards);
});

test('set sort cards value', () => {
  const action = setSortCards(sort);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.sort).toBe(sort);
});

test('set search answer cards', () => {
  const action = setSearchAnswerCards(searchValue);

  const endState = cardsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.searchAnswer).toBe(searchValue);
});

// to be continued
