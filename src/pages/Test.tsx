import { ReactElement, useState } from 'react';

import { SuperButton, SuperCheckbox, SuperInputText } from 'components';
import { Pagination } from 'pages/Pagination/Pagination';

export const Test = (): ReactElement => {
  const [text, setText] = useState('');
  const [disable, setDisable] = useState(false);

  return (
    <div>
      <h1>Test</h1>
      <SuperInputText onChange={e => setText(e.currentTarget.value)} />
      <SuperCheckbox
        checked={disable}
        onChange={e => setDisable(e.currentTarget.checked)}
      />
      <SuperButton disabled={!disable} onClick={() => text} title="Button">
        Button
      </SuperButton>

      <Pagination />
    </div>
  );
};
