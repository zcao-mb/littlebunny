import { combineReducers } from 'redux';
import { editShiftReducer } from './rosterUi.editShift';

export default combineReducers({
    editShift: editShiftReducer
});