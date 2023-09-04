import { combineReducers } from 'redux';
import ratesReducer from './reducers/ratesReducer';

const reducers = combineReducers({
	rates: ratesReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
