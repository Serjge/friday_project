import { ErrorValidateMessage } from 'enum';
import { getErrorValidate } from 'utils';

test('error validate', () => {
  const result1 = getErrorValidate('required');
  const result2 = getErrorValidate('minLength');
  const result3 = getErrorValidate('validate');
  const result4 = getErrorValidate('pattern');
  const result5 = getErrorValidate('some text');

  expect(result1).toBe(ErrorValidateMessage.required);
  expect(result2).toBe(ErrorValidateMessage.minLength);
  expect(result3).toBe(ErrorValidateMessage.validate);
  expect(result4).toBe(ErrorValidateMessage.pattern);
  expect(result5).toBe(undefined);
});
