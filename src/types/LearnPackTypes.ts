export type QuestionType = {
  isActiveQuestion: boolean;
  setIsActiveQuestion: (isActive: boolean) => void;
  question: string;
  closeLearnWindow: () => void;
  setIsActiveAnswer: (isActive: boolean) => void;
};

export type AnswerType = {
  isActiveAnswer: boolean;
  setIsActiveAnswer: (isActive: boolean) => void;
  handleNextQuestion: (grade: number) => void;
  answer: string;
};

export type ErrorType = {
  active: boolean;
  closeLearningWindow: (isActive: boolean) => void;
};

export type LearnPackPropsType = {
  packId: string;
  cardsCount: number;
};
