import { URL, ROUTE, METHOD, ERROR_TEXT } from '../consts.js';

const load = async (route, method = METHOD.GET, body = null) => {
  const response = await fetch(`${URL}${route}`, { method, body });
  return response.ok ? await response.json() : Promise.reject(ERROR_TEXT[method]);
};

export const getData = async () => await load(ROUTE.getData);
export const sendData = async (body) => await load(ROUTE.sendData, METHOD.POST, body);
