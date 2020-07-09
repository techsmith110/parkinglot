import { RestrictInputDirective } from './restrictInput.directive';

describe('OnlyNumber', () => {
  it('should create an instance', () => {
    const directive = new RestrictInputDirective();
    expect(directive).toBeTruthy();
  });
});
