import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  Reducer  from './reducers';
import initialState from './initialState';
import './styles/index.css';


const store = createStore(
	Reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(	<Provider store={store}>
	<App />
</Provider>, document.getElementById('root'));
