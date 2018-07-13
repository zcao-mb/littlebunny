import moment from 'moment';

import { config, handleResponse, handleError } from './helpers';

export const rosterService = {
    getEmployees,
    searchDays,
    searchShifts
}

function getEmployees() {
    const url = `${config.apiRoot}/roster/employees`;
    return fetch(url).then(handleResponse, handleError);
}


function searchDays(startDate, endDate) {
    const url = `${config.apiRoot}/roster/days`;
    const param = {
        startDate: moment(startDate).format('YYYY-MM-DD'), 
        endDate: moment(endDate).format('YYYY-MM-DD')
    };
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(param)
      };

    return fetch(url, options).then(handleResponse, handleError);
}

function searchShifts(startDate, endDate) {

    const url = `${config.apiRoot}/roster/shifts`;
    const param = {
        startDate: moment(startDate).format('YYYY-MM-DD'), 
        endDate: moment(endDate).format('YYYY-MM-DD')
    };
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(param)
    };
    return fetch(url, options).then(handleResponse, handleError);
}