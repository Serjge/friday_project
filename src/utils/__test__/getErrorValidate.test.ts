import { ErrorValidateMessage } from 'enum';
import { getErrorValidate } from 'utils';

test('error validate', () => {
  const result1 = getErrorValidate('required');
  const result2 = getErrorValidate('minLength');
  const result3 = getErrorValidate('validate');
  const result4 = getErrorValidate('pattern');
  const result5 = getErrorValidate('some text');

  expect(result1).toBe(ErrorValidateMessage.Required);
  expect(result2).toBe(ErrorValidateMessage.MinLength);
  expect(result3).toBe(ErrorValidateMessage.Validate);
  expect(result4).toBe(ErrorValidateMessage.Pattern);
  expect(result5).toBe(undefined);
});
