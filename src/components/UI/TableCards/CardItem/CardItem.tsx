import { memo } from 'react';

import { TableItem } from 'components/UI/TableCardsPack/PackItem/style';

export const CardItem = memo(({ id }: { id: string }) => {
  const dataNew = new Date();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TableItem width="300px">{id}How This works in JavaScript?</TableItem>
      <TableItem width="300px">This is how This works in JavaScript</TableItem>
      <TableItem width="100px">{dataNew.toLocaleDateString()}</TableItem>
      <TableItem width="100px">*****</TableItem>
    </div>
  );
});
