import { HumidityFlagPipe } from './humidity-flag.pipe';

describe('HumidityFlagPipe', () => {
  it('create an instance', () => {
    const pipe = new HumidityFlagPipe();
    expect(pipe).toBeTruthy();
  });
});
