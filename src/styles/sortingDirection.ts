import styled from 'styled-components';

type SortingDirectionPropsType = {
  sortType: string;
  sortPack: string;
};

export const SortingDirection = styled.div<SortingDirectionPropsType>`
  width: 0;
  height: 0;
  display: block;
  margin: 2px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: ${({ sortType, sortPack }) =>
    sortPack === `0${sortType}` ? '10px solid grey' : ''};
  border-bottom: ${({ sortType, sortPack }) =>
    sortPack === `1${sortType}` ? '10px solid grey' : ''};
`;
