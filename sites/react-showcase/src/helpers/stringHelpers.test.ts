import { trimString } from './stringHelpers';

describe('StringHelper Tests', () => {
  it('should not trim string under length', () => {
    const shortString = 'short string';
    const untrimmed = trimString(shortString, 15);

    expect(untrimmed).toEqual(shortString);
  });

  it('should trim string over length', () => {
    const shortString = 'short string';
    const trimmedString = 'sho...';
    const trimmed = trimString(shortString, 6);

    expect(trimmed).toEqual(trimmedString);
  });
});
