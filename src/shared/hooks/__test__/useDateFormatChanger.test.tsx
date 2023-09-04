import { renderHook } from '@testing-library/react';
import { useDateFormatChanger } from '../useDateFormatChanger';

describe('useDateFormatChanger', () => {
  it('should format a valid date', () => {
    const { result } = renderHook(() => useDateFormatChanger('2023-08-29'));
    expect(result.current.outputDate).toBe('29-08-2023');
  });

  it('should handle undefined inputDate', () => {
    const { result } = renderHook(() => useDateFormatChanger());
    expect(result.current.outputDate).toBe('');
  });
});
