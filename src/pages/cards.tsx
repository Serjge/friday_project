import { ReactElement, useEffect } from 'react';

import styled from 'styled-components';

import { cardsApi } from 'api/cardsApi';

const TableHead = styled.div`
  padding: 20px;
`;

// type cards = {
//   cardsCount: number;
//   created: string;
//   grade: number;
//   more_id: string;
//   name: string;
//   path: string;
//   private: boolean;
//   rating: number;
//   shots: number;
//   type: string;
//   updated: string;
//   user_id: string;
//   user_name: string;
//   __v: number;
//   _id: string;
// };

export const Cards = (): ReactElement => {
  useEffect(() => {
    cardsApi.getCards().then(res => console.log(res));
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '670px' }}>
        <TableHead>Name</TableHead>
        <TableHead>Cards</TableHead>
        <TableHead>Last Updated</TableHead>
        <TableHead>Creat by</TableHead>
        <TableHead>Action</TableHead>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '670px' }}>
        <TableHead>Name</TableHead>
        <TableHead>Cards</TableHead>
        <TableHead>Last Updated</TableHead>
        <TableHead>Creat by</TableHead>
        <TableHead>Action</TableHead>
      </div>
    </div>
  );
};
