import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { valueReducer } from './test';
import scheduleReducer from './schedule/reducer';

export default function configureStore(initialState = {}) {

    const reducers = combineReducers({
        values: valueReducer,
        schedule: scheduleReducer
    });

    const middleware = [
        thunk
    ];

    return createStore(reducers, initialState, applyMiddleware(...middleware));
}