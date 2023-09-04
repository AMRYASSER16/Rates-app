import ratesReducer from '../ratesReducer';
import { ActionType } from '../../action-types';
import { RatesActionTypes } from '../types/ratesReducerTypes';

describe('ratesReducer', () => {
	const initialState = {
		rates: {},
		loading: false,
		error: null
	};

	it('handles ActionType.RATES_LOADING correctly', () => {
		const action = { type: ActionType.RATES_LOADING } as RatesActionTypes;
		const newState = ratesReducer(initialState, action);

		expect(newState).toEqual({
			rates: {},
			loading: true,
			error: null
		});
	});

	it('handles ActionType.RATES_SUCCESS correctly', () => {
		const ratesData = {
			EUR: 1,
			USD: 1.08
		};
		const action = { type: ActionType.RATES_SUCCESS, payload: ratesData } as RatesActionTypes;
		const newState = ratesReducer(initialState, action);

		expect(newState).toEqual({
			rates: ratesData,
			loading: false,
			error: null
		});
	});

	it('handles ActionType.RATES_ERROR correctly', () => {
		const errorMessage = 'An error occurred';
		const action = { type: ActionType.RATES_ERROR, payload: errorMessage } as RatesActionTypes;
		const newState = ratesReducer(initialState, action);

		expect(newState).toEqual({
			rates: {},
			loading: false,
			error: errorMessage
		});
	});
});
