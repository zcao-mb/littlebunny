
import { combineReducers } from 'redux';

import reducerView from './reducer.view';
import reducerSearch from './reducer.search';
import reducerEdit from './reducer.edit';

export default combineReducers({
    search: reducerSearch,
    view: reducerView,
    edit: reducerEdit
});