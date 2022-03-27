import { ReactElement } from 'react';

import { HelpText, Wrapper } from 'styles';

export const InstructionSet = (): ReactElement => (
  <Wrapper>
    <h1>Check Email</h1>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlro_FW1Eg_fznNk9a4pOcfUpJ9uzOPoaLw&usqp=CAU"
      alt="sent-email"
    />
    <div>
      <HelpText>We have sent an Email with instructions to your email</HelpText>
    </div>
  </Wrapper>
);
