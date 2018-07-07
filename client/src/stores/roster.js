import { rosterService } from '../services/rosterService';

const GET_EMPLOYEE = 'GET_EMPLOYEE';

export const actionCreators = {
    getEmployees: () => dispatch => {
        rosterService.getEmployees()
            .then(function(data) {
                dispatch({ type: GET_EMPLOYEE, payload: data})
            }, function(error) {

            })
    }
};

export const rosterReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_EMPLOYEE: 
            return { ...state, employees: action.payload };
        default:
            return state;
    }
} 