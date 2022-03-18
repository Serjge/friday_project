import { ReactElement, useState } from 'react';

import { AddPack, SuperButton, SuperCheckbox, SuperInputText } from 'components';
import { MultiRangeSlider } from 'components/DoubleRange/MultiRangeSlider';

export const Test = (): ReactElement => {
  const [text, setText] = useState('');
  const [disable, setDisable] = useState(false);

  const logValue = (min: number, max: number): void => {
    console.log(max, min);
  };

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
      <MultiRangeSlider min={10} max={100} onChange={logValue} />
    </div>
  );
};
