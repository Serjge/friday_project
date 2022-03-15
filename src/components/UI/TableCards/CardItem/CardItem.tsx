import { memo } from 'react';

import { TableItem } from 'components/UI/TableCardsPack/PackItem/style';

export const CardItem = memo(({ id }: { id: string }) => {
  const dataNew = new Date();
  console.log(id);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TableItem width="200px">How This works in JavaScript?</TableItem>
      <TableItem width="50px">This is how This works in JavaScript</TableItem>
      <TableItem width="100px">{dataNew.toLocaleDateString()}</TableItem>
      <TableItem width="200px">*****</TableItem>
    </div>
  );
});
