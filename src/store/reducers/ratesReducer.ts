import { ActionType } from '../action-types';
import { RatesActionTypes, RatesState } from './types/ratesReducerTypes';

const initialState: RatesState = {
  rates: {},
  loading: false,
  error: null
};

const ratesReducer = (state: RatesState = initialState, action: RatesActionTypes): RatesState => {
  switch (action.type) {
    case ActionType.RATES_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.RATES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        rates: action.payload,
      };
      case ActionType.RATES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ratesReducer;
