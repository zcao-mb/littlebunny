
import { config, handleResponse, handleError } from './helpers';

export function fetchSchedule(site, startDate, endDate) {

    const url = `${config.apiRoot}/schedule/fetch?site=${site}`;
    const param = {
        startDate, 
        endDate
    };
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(param)
    };
    return fetch(url, options).then(handleResponse, handleError);
}