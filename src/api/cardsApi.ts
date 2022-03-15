/* eslint-disable @typescript-eslint/no-magic-numbers */
import { instance } from 'api';
import { CardsPackType } from 'types';

export const cardsApi = {
  getCards2() {
    return instance.get<CardsPackType>('/cards/pack');
  },
  getCards(
    cardsPackId: string = '',
    cardAnswer: string = '',
    cardQuestion: string = '',
    min: number = 0,
    max: number = 0,
    sortCards: string = '',
    pageCount: number = 0,
    page: number = 0,
  ) {
    return instance.get<CardsType>('/cards/card', {
      params: {
        cardAnswer,
        cardQuestion,
        cardsPack_id: cardsPackId,
        min,
        max,
        sortCards,
        pageCount,
        page,
      },
    });
  },
  getPacks(
    packName: string = '',
    min: number = 0,
    max: number = 0,
    sortPacks: string = '',
    pageCount: number = 0,
    page: number = 0,
    userId: string = '',
  ) {
    return instance.get<CardsPackType>('/cards/pack', {
      params: {
        packName,
        min,
        max,
        sortPacks,
        pageCount,
        page,
        user_id: userId,
      },
    });
  },
};

type CardType = {
  answer: string;
  cardsPack_id: string;
  comments: String;
  created: string;
  grade: number;
  more_id: string;
  question: string;
  questionImg: string;
  rating: number;
  shots: number;
  type: string;
  updated: string;
  user_id: string;
  __v: number;
  _id: string;
};

type CardsType = {
  cards: CardType;
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  packUserId: string;
  page: number;
  pageCount: number;
  token: string;
  tokenDeathTime: number;
};
//   ?cardAnswer=english // не обязательно
//   &cardQuestion=english // не обязательно
//   &cardsPack_id=5eb6a2f72f849402d46c6ac7
//   &min=1 // не обязательно
//   &max=4 // не обязательно
//   &sortCards=0grade // не обязательно
// &page=1 // не обязательно
// &pageCount=7 // не обязательно

// cards: Array(2)
// 0: {_id: '62305ab4896f811134845dc5', cardsPack_id: '623056734348a50004eb4dc3', user_id: '622af9b229bee90004696543', answer: 'yes', question: 'why', …}
// 1: {_id: '62305a014348a50004eb4dc4', cardsPack_id: '623056734348a50004eb4dc3', user_id: '622af9b229bee90004696543', answer: 'no answer', question: 'new 2.0!', …}
// length: 2
//   [[Prototype]]: Array(0)
// cardsTotalCount: 2
// maxGrade: 6
// minGrade: 0
// packUserId: "622af9b229bee90004696543"
// page: 1
// pageCount: 4
// token: "61fbcd70-a44a-11ec-9b39-ff5f1467ac8c"
// tokenDeathTime: 1647350792007

// answer: "no answer"
// cardsPack_id: "623056734348a50004eb4dc3"
// comments: ""
// created: "2022-03-15T09:18:57.470Z"
// grade: 2.474441899526456
// more_id: "622af9b229bee90004696543"
// question: "new 2.0!"
// questionImg: "some img"
// rating: 0
// shots: 0
// type: "card"
// updated: "2022-03-15T09:18:57.470Z"
// user_id: "622af9b229bee90004696543"
// __v: 0
// _id: "62305a014348a50004eb4dc4"
