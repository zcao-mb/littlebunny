import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { valueReducer } from './test';
import { rosterReducer } from './roster';

export default function configureStore(initialState = {}) {

    const reducers = combineReducers({
        values: valueReducer,
        roster: rosterReducer
    });

    const middleware = [
        thunk
    ];

    return createStore(reducers, initialState, applyMiddleware(...middleware));
}