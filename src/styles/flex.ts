import styled from 'styled-components';

type FlexPropsType = {
  justifyContent?:
    | 'flex-end'
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around';

  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';

  alignItems?: 'flex-end' | 'flex-start' | 'center' | 'self-end' | 'self-start';
};

export const Flex = styled.div<FlexPropsType>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
`;