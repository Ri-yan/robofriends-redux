// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux'
// import {createStore,applyMiddleware,combineReducers} from 'redux';
// import {createLogger} from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
// import './index.css';
// import App from './containers/App';
// import {searchRobots,requestRobots} from './reducers';
// import 'tachyons';

// const logger=createLogger();
// const rootreducer + combineReducers({searchRobots,requestRobots})
// export const store = 
// createStore(searchRobots,applyMiddleware(thunkMiddleware,logger))
// ReactDOM.render( 
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { requestRobots, searchRobots } from './reducers'

import './index.css';

const logger = createLogger() 

const rootReducers = combineReducers({requestRobots, searchRobots})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// registerServiceWorker();