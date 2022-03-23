export type QuestionType = {
  isActiveQuestion: boolean;
  setIsActiveQuestion: (value: boolean) => void;
  question: string;
  closeLearnWindow: () => void;
  setIsActiveAnswer: (value: boolean) => void;
};

export type AnswerType = {
  isActiveAnswer: boolean;
  setIsActiveAnswer: (value: boolean) => void;
  handleOpenAnswer: () => void;
  answer: string;
};

export type ErrorType = {
  active: boolean;
  closeErrorWindow: (value: boolean) => void;
};
