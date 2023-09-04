import { getRates } from '../getRates';
import { ActionType } from '../../action-types';

jest.mock('../../../api', () => ({
	get: jest.fn()
}));

const dispatchMock = jest.fn();
const apiMock = require('../../../api');

describe('getRates action creator', () => {
	it('dispatches the correct action on successful API response', async () => {
		const responseData = {
			date: '2023-08-28',
			base: 'EUR',
			rates: {
				EUR: 1,
				USD: 1.0808,
				JPY: 158.35,
				BGN: 1.9558,
				CZK: 24.138
			}
		};

		apiMock.get.mockResolvedValue({ data: responseData });

		await getRates()(dispatchMock, () => {}, {});

		expect(dispatchMock).toHaveBeenCalledWith({
			type: ActionType.RATES_SUCCESS,
			payload: responseData
		});
	});
	it('dispatches error action on API call error', async () => {
		const errorMessage = 'Network Error';

		apiMock.get.mockRejectedValue(new Error(errorMessage));

		await getRates()(dispatchMock, () => {}, {});

		expect(dispatchMock).toHaveBeenCalledWith({
			type: ActionType.RATES_ERROR,
			payload: errorMessage
		});
	});
});
