export type CardType = {
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
  cards: CardType[];
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  packUserId: string;
  page: number;
  pageCount: number;
  token: string;
  tokenDeathTime: number;
};
