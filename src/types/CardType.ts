export type CardType = {
  cardsCount: number;
  created: string;
  grade: number;
  more_id: string;
  name: string;
  path: string;
  private: boolean;
  rating: number;
  shots: number;
  type: string;
  updated: string;
  user_id: string;
  user_name: string;
  __v: number;
  _id: string;
};

export type CardsPackType = {
  cardPacks: CardType[];
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
  token: string;
  tokenDeathTime: number;
};

export type NewCardType = {
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

export type CardsType = {
  cards: NewCardType[];
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  packUserId: string;
  page: number;
  pageCount: number;
  token: string;
  tokenDeathTime: number;
};
