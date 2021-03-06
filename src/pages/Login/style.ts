import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ForgotPassword = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme: { helpTextColor } }) => helpTextColor};
  text-align: right;
`;
