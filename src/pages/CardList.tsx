import { memo, ReactElement, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { TextField, TableCards } from 'components';
import { SEARCH_DELAY } from 'const';
import { useDebounce } from 'hook';
import { setSearchAnswer, setSearchQuestion } from 'store/actions';
import {
  selectSearchAnswer,
  selectSearchQuestion,
  selectSortCard,
} from 'store/selectors';
import { getCardTC } from 'store/thunks';

export const CardList = memo((): ReactElement => {
  const dispatch = useDispatch();

  const { id, name } = useParams<'id' | 'name'>();

  const sortCard = useSelector(selectSortCard);
  const searchQuestion = useSelector(selectSearchQuestion);
  const searchAnswer = useSelector(selectSearchAnswer);

  useEffect(() => {
    if (id) {
      dispatch(getCardTC(id, sortCard, searchQuestion, searchAnswer));
    }
  }, [sortCard, searchQuestion, searchAnswer]);

  const [questionValue, setQuestionValue] = useState('');
  const [answerValue, setAnswerValue] = useState('');

  const searchByQuestion = (question: string): void => {
    dispatch(setSearchQuestion(question));
  };
  const searchByAnswer = (answer: string): void => {
    dispatch(setSearchAnswer(answer));
  };

  const debounceSearchQuestion = useDebounce(searchByQuestion, SEARCH_DELAY);
  const debounceSearchAnswer = useDebounce(searchByAnswer, SEARCH_DELAY);

  const onSearchQuestionChange = (question: string): void => {
    setQuestionValue(question);
    debounceSearchQuestion(question);
  };
  const onSearchAnswerChange = (answer: string): void => {
    setAnswerValue(answer);
    debounceSearchAnswer(answer);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {name}
      <div
        style={{
          display: 'flex',
          margin: '20px',
          alignItems: 'center',
        }}
      >
        Question:
        <TextField value={questionValue} onChangeText={onSearchQuestionChange} />
        Answer:
        <TextField value={answerValue} onChangeText={onSearchAnswerChange} />
      </div>
      <TableCards />
    </div>
  );
});
