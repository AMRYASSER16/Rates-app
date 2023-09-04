import { ActionType } from '../../action-types';

export interface RatesState {
  rates: Record<string, number>;
  loading: boolean;
  error: string | null;
}

export interface RatesSuccessAction {
  type: ActionType.RATES_SUCCESS;
  payload: Record<string, number>;
}

export interface RatesErrorAction {
  type: ActionType.RATES_ERROR;
  payload: string;
}

export interface RatesLoadingAction {
  type: ActionType.RATES_LOADING,
  payload: string
}

export type RatesActionTypes = RatesSuccessAction | RatesLoadingAction | RatesErrorAction;
