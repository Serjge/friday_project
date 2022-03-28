import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme: { mainColor } }) => mainColor};
  margin-top: 20px;
`;
