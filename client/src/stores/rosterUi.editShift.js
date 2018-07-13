// these actions and reducers are used to control the compoment of UI

const EDIT_SHIFT = 'EDIT_SHIFT';

export const actionCreators = {
    editShift: (employee, date) => dispatch => {
        console.log('editing shift...');
        dispatch({ type: EDIT_SHIFT, status: 'editing', payload: {employee, date }})
    },

    saveShift: () => dispatch => {
        dispatch({ type: EDIT_SHIFT, status: 'closed', payload: {}})
    }
};


const initialState = {
    status: 'closed'
};


export const editShiftReducer = (state = initialState, action) => {

    if(action.type === EDIT_SHIFT) {
        return {...state, status: action.status, params: action.payload }
    }

    return state;
}