import { actionStatus } from '../helpers/actionHelpers';
import * as actions from './actionTypes';


const initialState = {
    loading: false,
    data: {},
    error: null
};

const reducer = (state = initialState, action) => {
    if(action.type === actions.FETCH_SCHEDULE) {
        switch(action.status) {
            case actionStatus.request:
                return {...state, loading: true};
            case actionStatus.success:
                return {...state, loading: false, data: action.payload, error: null};
            case actionStatus.failure:
                return {...state, loading: false, error: action.payload};
            default:
                return state;
        }
    }

    return state;
}

export default reducer;