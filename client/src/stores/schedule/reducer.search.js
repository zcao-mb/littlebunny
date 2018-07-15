
import { actionStatus } from '../helpers/actionHelpers';
import * as actions from './actionTypes';


const initialState = {
};

const reducer = (state = initialState, action) => {
    if(action.type === actions.FETCH_SCHEDULE) {
        switch(action.status) {
            case actionStatus.loading:
                return action.payload;
            default:
                return state;
        }
    }

    return state;
};

export default reducer;