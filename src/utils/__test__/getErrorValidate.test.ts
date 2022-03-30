import { ErrorValidateMessage } from 'enum';
import { getValidErrorMessage } from 'utils';

test('error validate', () => {
  const result1 = getValidErrorMessage('required');
  const result2 = getValidErrorMessage('minLength');
  const result3 = getValidErrorMessage('validate');
  const result4 = getValidErrorMessage('pattern');
  const result5 = getValidErrorMessage('some text');

  expect(result1).toBe(ErrorValidateMessage.Required);
  expect(result2).toBe(ErrorValidateMessage.MinLength);
  expect(result3).toBe(ErrorValidateMessage.Validate);
  expect(result4).toBe(ErrorValidateMessage.Pattern);
  expect(result5).toBe(undefined);
});
