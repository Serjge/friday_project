import styled from 'styled-components';

import img from './background/generalImage.gif';

export const Background = styled.div`
  margin: 20px auto;
  width: 430px;
  height: 230px;
  background-image: url(${img});
  background-repeat: no-repeat;
`;

export const MainDiv = styled.div`
  position: absolute;
  height: 80%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  font-size: 60px;
  font-weight: 700;
  color: rgb(255, 255, 255);
`;
