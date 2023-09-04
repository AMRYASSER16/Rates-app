import { ActionType } from '../../action-types';

export type RatesData = {
	[currencyCode: string]: number;
};

export type ApiResponse = {
	rates: RatesData;
};

export type GetRatesSuccessAction = {
	type: ActionType.RATES_SUCCESS;
	payload: ApiResponse;
};

export type GetRatesErrorAction = {
	type: ActionType.RATES_ERROR;
	payload: string;
};

export type GetRatesLoadingAction = {
	type: ActionType.RATES_LOADING;
};

export type RatesActionTypes = GetRatesSuccessAction | GetRatesLoadingAction | GetRatesErrorAction;