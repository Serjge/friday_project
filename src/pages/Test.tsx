import { ReactElement, useState } from 'react';

import { AddPack, SuperButton, SuperCheckbox, SuperInputText } from 'components';

export const Test = (): ReactElement => {
  const [text, setText] = useState('');
  const [disable, setDisable] = useState(false);

  return (
    <div>
      <AddPack />
      <h1>Test</h1>
      <SuperInputText onChange={e => setText(e.currentTarget.value)} />
      <SuperCheckbox
        checked={disable}
        onChange={e => setDisable(e.currentTarget.checked)}
      />
      <SuperButton disabled={!disable} onClick={() => text} title="Button">
        Button
      </SuperButton>
    </div>
  );
};
