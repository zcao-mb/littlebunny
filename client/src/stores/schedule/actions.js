
import { actionStatus } from '../helpers/actionHelpers';
import * as actionTypes from './actionTypes';

import * as scheduleService from '../../services/schedule';

export const fetchSchedule = (site, startDate, endDate) => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_SCHEDULE, status: actionStatus.request, payload: {site, startDate, endDate}})

    await scheduleService.fetchSchedule(site, startDate, endDate)
        .then(function(data) {
            console.log('got schedule data...');
            dispatch({ type: actionTypes.FETCH_SCHEDULE, status: actionStatus.success, payload: data });
        }, function(error) {
            dispatch({ type: actionTypes.FETCH_SCHEDULE, status: actionStatus.failure, payload: error });
        });
}
