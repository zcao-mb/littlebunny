import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { valueReducer } from './test';
import rosterUiReducer from './rosterUi';
import { scheduleReducer } from './schedule/reducer';

export default function configureStore(initialState = {}) {

    const reducers = combineReducers({
        values: valueReducer,
        rosterUi: rosterUiReducer,
        schedule: scheduleReducer
    });

    const middleware = [
        thunk
    ];

    return createStore(reducers, initialState, applyMiddleware(...middleware));
}