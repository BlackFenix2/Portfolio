import rootUrl from '../API/rootUrl';

export const methods = {
  DELETE: 'DELETE',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT'
};

export async function apiRequest(url, method, body?) {
  try {
    const response = await fetch(rootUrl + url, {
      method,
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    // await response out of promise
    const data = await response;
    // catch empty response string from throwing unneeded errors
    const json = data.text().then(text => (text ? JSON.parse(text) : {}));
    if (data.status < 200 || data.status > 299) {
      throw json;
    }
    return json;
  } catch (error) {
    // await error to resolve promise
    throw await error;
  }
}

export async function externalApiRequest(url, method, body?) {
  try {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    // await response out of promise
    const data = await response;
    // catch empty response string from throwing unneeded errors
    const json = data.text().then(text => (text ? JSON.parse(text) : {}));
    if (data.status < 200 || data.status > 299) {
      throw json;
    }
    return json;
  } catch (error) {
    // await error to resolve promise
    throw await error;
  }
}
