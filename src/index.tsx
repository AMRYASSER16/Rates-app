import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './store';
import Home from './pages/Home';
import './index.css';

const store = createStore(reducers, applyMiddleware(reduxThunk));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<Provider store={store}>
		<Home />
	</Provider>
);
