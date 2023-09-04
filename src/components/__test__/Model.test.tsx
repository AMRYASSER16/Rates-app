import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Model from '../Model';

describe('Model Component', () => {
  const onCloseMock = jest.fn();

  it('renders the error message', () => {
    const errorMessage = 'This is an error message';
    const { getByText } = render(<Model message={errorMessage} onClose={onCloseMock} />);
    
    const errorMessageElement = getByText(errorMessage);
    expect(errorMessageElement).toBeTruthy();
  });

  it('calls onClose when the close button is clicked', () => {
    const errorMessage = 'This is an error message';
    const { getByText } = render(<Model message={errorMessage} onClose={onCloseMock} />);
    
    const closeButton = getByText('Close');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
