import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../Home';
import { getRates } from '../../store/action-creators/getRates';

const mockStore = configureStore();

jest.mock('../../store/action-creators/getRates', () => ({
	getRates: jest.fn()
}));

describe('Home component', () => {
	it('renders correctly when loading is true', () => {
		const initialState = {
			rates: {
				loading: true,
				rates: {},
				error: null
			}
		};

		const store = mockStore(initialState);
		const { getByTestId } = render(
			<Provider store={store}>
				<Home />
			</Provider>
		);

		const loadingElement = getByTestId('loading-container');
		expect(loadingElement).toBeTruthy();
	});

	it('dispatches getRates action when button is clicked', () => {
		const initialState = {
			rates: {
				loading: false,
				rates: {},
				error: null
			}
		};

		const store = mockStore(initialState);
		store.dispatch = jest.fn();

		const { getByTestId } = render(
			<Provider store={store}>
				<Home />
			</Provider>
		);

		const buttonElement = getByTestId('click-me-button');
		fireEvent.click(buttonElement);

		expect(store.dispatch).toHaveBeenCalledWith(getRates());
	});
});
