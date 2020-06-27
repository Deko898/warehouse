import isomorphicFetch from 'isomorphic-fetch';

export default (url: string, method: string = 'GET', body?: any): Promise<any> => {
    const options = {
        method,
        headers: requestHeaders(),
        body: method !== 'GET' ? JSON.stringify(body) : null,
    };

    return isomorphicFetch(url, options)
        .then((res: any) => parseStatus(res.status, res.json()));
};

function parseStatus(status: number, res: any): Promise<any> {
    return new Promise((resolve, reject) => {
        if (status >= 200 && status < 300) {
            res.then((response: any) => resolve(response));
        } else {
            res.then((response: any) => reject({ status, response }));
        }
    });
}

function requestHeaders() {
    return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
}
