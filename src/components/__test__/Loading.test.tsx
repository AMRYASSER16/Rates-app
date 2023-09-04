import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../Loading';

describe('Loading component', () => {
  test('renders loading message correctly', () => {
    const { getByText } = render(<Loading />);
    const loadingElement = getByText('Loading...');
    expect(loadingElement).toBeTruthy();
  });
});
