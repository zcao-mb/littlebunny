import { rosterService } from '../services/rosterService';
import { actionStatus } from './helpers/actionHelpers';

const GET_EMPLOYEE = 'GET_EMPLOYEE';
const SEARCH_DAYS = 'SEARCH_DAYS';

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

    searchDays: (startDate, endDate) => async (dispatch) => {
        dispatch({ type: SEARCH_DAYS, status: actionStatus.request });

        await rosterService.searchDays(startDate, endDate)
            .then(function(data) {
                dispatch({ type: SEARCH_DAYS, status: actionStatus.success, payload: data });
            }, function(error) {
                dispatch({ type: SEARCH_DAYS, status: actionStatus.failure, payload: error });
            })
    }
};

const initialState = {
    loading: false,
    employees: [],
    days: [],
    error: null
};

export const rosterReducer = (state = initialState, action) => {
    if (action.type === GET_EMPLOYEE) {
        switch(action.status) {
            case actionStatus.request:
                return { ...state, loading: true, error: null };
            case actionStatus.success:
                console.log('receiving  data');
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
                console.log('receiving  data');
                return { ...state, loading: false, error: null, days: action.payload };
            case actionStatus.failure:
                return { ...state, loading: false, error: action.payload, days: []}
            default:
                return state;
        }
    }

    return state;
} 