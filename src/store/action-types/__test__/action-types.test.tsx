import { ActionType } from '..';

describe('ActionType enum', () => {
  it('should have the correct value for RATES_SUCCESS', () => {
    expect(ActionType.RATES_SUCCESS).toEqual('RATES_SUCCESS');
  });

  it('should have the correct value for RATES_LOADING', () => {
    expect(ActionType.RATES_LOADING).toEqual('RATES_LOADING');
  });

  it('should have the correct value for RATES_ERROR', () => {
    expect(ActionType.RATES_ERROR).toEqual('RATES_ERROR');
  });
});
