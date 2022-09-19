import { validateInput } from './../app';

describe('validateInput', () => {
  it('should return proper value when good input', () => {
    expect(validateInput('1')).toBe(1);
  });
});
