import styled, { CSSProp } from 'styled-components';

type FlexPropsType = {
  justifyContent?:
    | 'flex-end'
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around';

  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';

  alignItems?: 'flex-end' | 'flex-start' | 'center' | 'self-end' | 'self-start';

  alignSelf?: 'self-start' | 'self-end' | 'center' | 'auto';
  margin?: CSSProp;
};

export const Flex = styled.div<FlexPropsType>`
  margin: ${({ margin }) => margin};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-self: ${({ alignSelf }) => alignSelf};
`;
