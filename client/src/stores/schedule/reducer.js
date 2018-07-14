
import { actionStatus } from '../helpers/actionHelpers';
import * as actions from './actionTypes';


const initialState = {
    view: {data: {}},
    edit: {}
};

export const scheduleReducer = (state = initialState, action) => {
    if(action.type === actions.FETCH_SCHEDULE) {

        let view = {
            loading: false,
            data: {},
            error: null
        };

        switch(action.status) {
            case actionStatus.request:
                view.loading = true;
                break;
            case actionStatus.success:
                console.log('receiving schedule data');
                view.loading = false;
                view.data = action.payload;
                view.error = null;
                break;
            case actionStatus.failure:
                view.loading = false;
                view.error = action.payload;
                view.data = null;
                break;
            default:
                break;
        }
        return { ...state, view }
    }

    return state;
}