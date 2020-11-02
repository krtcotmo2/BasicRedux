import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import conReducer from './store/reducers/Counter';
import resultsReducer from './store/reducers/Results';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
  ctr: conReducer,
  res:resultsReducer
})
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
