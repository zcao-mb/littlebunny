import _ from 'lodash';

import { rosterService } from '../services/rosterService';
import { actionStatus } from './helpers/actionHelpers';

const GET_EMPLOYEE = 'GET_EMPLOYEE';
const SEARCH_DAYS = 'SEARCH_DAYS';
const SEARCH_SHIFTS = 'SEARCH_SHIFTS';

export const actionCreators = {
    getEmployees: () => async (dispatch) => {

        dispatch({ type: GET_EMPLOYEE, status: actionStatus.request });

        await rosterService.getEmployees()
            .then(function(data) {
                console.log('got data...');
                dispatch({ type: GET_EMPLOYEE, status: actionStatus.success, payload: data });
            }, function(error) {
                dispatch({ type: GET_EMPLOYEE, status: actionStatus.failure, payload: error });
            });
    },

    searchWeeklyDays: (startDate) => async (dispatch) => {
        
        if(!_.isDate(startDate)) startDate = new Date(startDate);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6);
        
        dispatch({ type: SEARCH_DAYS, status: actionStatus.request });

        await rosterService.searchDays(startDate, endDate)
            .then(function(data) {
                dispatch({ type: SEARCH_DAYS, status: actionStatus.success, payload: data });
            }, function(error) {
                dispatch({ type: SEARCH_DAYS, status: actionStatus.failure, payload: error });
            })
    },

    searchWeeklyShifts: (startDate) => async (dispatch) => {

        if(!_.isDate(startDate)) startDate = new Date(startDate);
        const endDate = new Date(startDate)
        endDate.setDate(startDate.getDate() + 6);

        dispatch({ type: SEARCH_SHIFTS, status: actionStatus.request });

        await rosterService.searchShifts(startDate, endDate)
            .then(function(data) {
                dispatch({ type: SEARCH_SHIFTS, status: actionStatus.success, payload: data });
            }, function(error) {
                dispatch({ type: SEARCH_SHIFTS, status: actionStatus.failure, payload: error });
            })
    }
};

const initialState = {
    loading: false,
    employees: [],
    days: [],
    shifts: [],
    error: null
};

export const rosterReducer = (state = initialState, action) => {
    if (action.type === GET_EMPLOYEE) {
        switch(action.status) {
            case actionStatus.request:
                return { ...state, loading: true, error: null };
            case actionStatus.success:
                console.log('receiving employees data');
                return { ...state, loading: false, error: null, employees: action.payload };
            case actionStatus.failure:
                return { ...state, loading: false, error: action.payload, employees: []}
            default:
                return state;
        }
    }
    else if(action.type === SEARCH_DAYS) {
        switch(action.status) {
            case actionStatus.request:
                return { ...state, loading: true, error: null };
            case actionStatus.success:
                console.log('receiving days data');
                return { ...state, loading: false, error: null, days: action.payload };
            case actionStatus.failure:
                return { ...state, loading: false, error: action.payload, days: []}
            default:
                return state;
        }
    }
    else if(action.type === SEARCH_SHIFTS) {
        switch(action.status) {
            case actionStatus.request:
                return { ...state, loading: true, error: null };
            case actionStatus.success:
                console.log('receiving shifts data: ', action.payload);
                return { ...state, loading: false, error: null, shifts: action.payload };
            case actionStatus.failure:
                return { ...state, loading: false, error: action.payload, shifts: []}
            default:
                return state;
        }
    }

    return state;
} 