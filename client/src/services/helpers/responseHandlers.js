export const errorTypes = {
    http: 'http',
    other: 'other'
};


export function handleResponse(response) {
    return new Promise((resolve, reject) => {
        console.log('response handler: ', response);
        if (response.ok) {
            // return json if it was returned in the response
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then(json => resolve(json));
            } else {
                response.text().then(text => resolve(text));
            }
        } else {
            reject({type: errorTypes.http, code: response.status, message: response.statusText});
        }
    });
}

export function handleError(error) {
    console.log('error handler: ', error);

    const message = (error && error.message) ? error.message : 'unknown';
    return Promise.reject({ type: errorTypes.other, message: message });
}