import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  forwardRef,
  InputHTMLAttributes,
  memo,
  ReactElement,
  RefAttributes,
  useCallback,
  useState,
} from 'react';

import { DeBounceTimer } from 'enum';
import { useDebounce } from 'hook';
import { Input } from 'styles';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type DebounceSearchFieldPropsType = DefaultInputPropsType &
  RefAttributes<HTMLInputElement> & {
    searchValue: (value: string) => void;
    width?: string;
  };

export const DebounceSearchField: FC<DebounceSearchFieldPropsType> = memo(
  forwardRef(({ searchValue, ...restProps }, ref): ReactElement => {
    const [value, setValue] = useState('');

    const search = (question: string): void => {
      searchValue(question);
    };

    const debounceSearch = useDebounce(search, DeBounceTimer.SEARCH_DELAY);

    const onSearchQuestionChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.currentTarget.value);
        debounceSearch(e.currentTarget.value);
      },
      [],
    );

    return (
      <Input ref={ref} value={value} onChange={onSearchQuestionChange} {...restProps} />
    );
  }),
);
