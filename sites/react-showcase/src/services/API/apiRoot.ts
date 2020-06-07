import axios from 'axios';
import rootUrl from '../API/rootUrl';

export const methods = {
  DELETE: 'DELETE',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
};

export async function apiRequest(url, method, body?) {
  try {
    const response = await axios.request({
      method,
      url: rootUrl + url,
      data: body,
    });

    // await response out of promise
    const { data } = response;
    if (response.status < 200 || response.status > 299) {
      throw data;
    }
    return data;
  } catch (error) {
    // await error to resolve promise
    throw await error;
  }
}

export async function externalApiRequest(url, method, body?) {
  try {
    const response = await axios.request({
      method,
      url,
      data: body,
    });

    // await response out of promise
    const { data } = response;
    if (response.status < 200 || response.status > 299) {
      throw data;
    }
    return data;
  } catch (error) {
    // await error to resolve promise
    throw await error;
  }
}
