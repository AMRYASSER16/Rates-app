import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
  test('renders button with correct text', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock} />);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeTruthy();
  });

  test('fires onClick event when button is clicked', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock} />);
    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
