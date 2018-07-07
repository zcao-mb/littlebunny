import { config, handleResponse, handleError } from './helpers';

export const testServices = {
    getValues
}

function getValues() {
    const url = `${config.apiRoot}/values`;
    return fetch(url).then(handleResponse, handleError);
}
