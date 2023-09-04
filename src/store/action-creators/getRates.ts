import api from '../../api';
import { ActionType } from '../action-types';
import { RatesActionTypes, ApiResponse } from './types/getRatesActionTypes';
import { ThunkAction } from 'redux-thunk';

export const getRates = (): ThunkAction<void, any, unknown, RatesActionTypes> => async (dispatch) => {
  dispatch({ type: ActionType.RATES_LOADING });

  try {
    const response = await api.get<ApiResponse>('/rates');
    dispatch({ type: ActionType.RATES_SUCCESS, payload: response.data });
  } catch (error) {
    const errorMessage = (error as Error).message;
    dispatch({
      type: ActionType.RATES_ERROR,
      payload: errorMessage,
    });
  }
};
