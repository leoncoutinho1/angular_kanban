import { Board } from './board';

describe('Board', () => {
  it('should create an instance', () => {
    expect(new Board('Board1', [])).toBeTruthy();
  });
});
