import React from 'react';
import { render } from '@testing-library/react';
import Table from '../Table';

describe('Table component', () => {  
  test('renders no rates data message correctly', () => {
    const rates = { rates: {}, date: '2023-08-28', base: 'EUR' };
    const { getByText } = render(<Table rates={rates} />);
    const messageElement = getByText('No rates data available.');
    expect(messageElement).toBeTruthy();
  });

  test('renders rates data correctly', () => {
    const rates = {
      rates: {
        EUR: 1,
        USD: 1.0808,
        JPY: 158.35,
      },
      date: '2023-08-28',
      base: 'EUR'
    };

    const { getByText } = render(<Table rates={rates} />);

    const dateElement = getByText('Date: 28-08-2023');
    const baseElement = getByText('Base: EUR');
    expect(dateElement).toBeTruthy();
    expect(baseElement).toBeTruthy();

    const eurElement = getByText('EUR');
    const usdElement = getByText('USD');
    const jpyElement = getByText('JPY');

    expect(eurElement).toBeTruthy();
    expect(usdElement).toBeTruthy();
    expect(jpyElement).toBeTruthy();
  });
});
