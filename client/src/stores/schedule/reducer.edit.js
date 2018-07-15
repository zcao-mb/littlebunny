
import { actionStatus } from '../helpers/actionHelpers';
import * as actions from './actionTypes';


const initialState = {
    editing: false,
    saving: false,
    data: null
};

const reducer = (state = initialState, action) => {
    if(action.type === actions.EDIT_SHIFT) {
        switch(action.status) {
            case actionStatus.request:
                return {...state, editing: true, saving: false, data: action.payload };
            case actionStatus.success:
                return {...state, editing: false, saving: false, data: null};
            default:
                return state;
        }
    }

    if(action.type === actions.SAVE_SHIFT) {
        switch(action.status) {
            case actionStatus.request:
                return {...state, saving: true, data: action.payload };
            case actionStatus.success:
                return {...state, editing: false, saving: false, data: action.payload};
            case actionStatus.failure:
                return {...state, saving: false, error: action.payload};
            default:
                return state;
        }
    }

    return state;
};

export default reducer;