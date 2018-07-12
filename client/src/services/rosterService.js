import { config, handleResponse, handleError } from './helpers';

export const rosterService = {
    getEmployees,
    searchDays
}

function getEmployees() {
    const url = `${config.apiRoot}/roster/employees`;
    return fetch(url).then(handleResponse, handleError);
}


function searchDays(startDate, endDate) {
    const url = `${config.apiRoot}/roster/days`;
    const param = {startDate, endDate}
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(param)
      };

    return fetch(url, options).then(handleResponse, handleError);
}