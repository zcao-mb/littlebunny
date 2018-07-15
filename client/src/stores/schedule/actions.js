
import { actionStatus } from '../helpers/actionHelpers';
import * as actionTypes from './actionTypes';

import * as scheduleService from '../../services/schedule';

export const fetchSchedule = (site, startDate, endDate) => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_SCHEDULE, status: actionStatus.request, payload: {site, startDate, endDate}});

    await scheduleService.fetchSchedule(site, startDate, endDate)
        .then(function(data) {
            dispatch({ type: actionTypes.FETCH_SCHEDULE, status: actionStatus.success, payload: data });
        }, function(error) {
            dispatch({ type: actionTypes.FETCH_SCHEDULE, status: actionStatus.failure, payload: error });
        });
}

export const editShift = (shift) => async (dispatch) => {
    dispatch({ type: actionTypes.EDIT_SHIFT, status: actionStatus.request, payload: shift });
}

export const saveShift = (shift) => async (dispatch) => {
    dispatch({ type: actionTypes.SAVE_SHIFT, status: actionStatus.success, payload: shift });
}

