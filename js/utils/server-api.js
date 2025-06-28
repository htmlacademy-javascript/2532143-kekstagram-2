const URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  getData: '/data',
  sendData: '/'
};

const Method = {
  GET: 'GET',
  POST: 'POST'
};

const errorText = {
  'GET': 'Не удалось загрузить данные. Повторите попытку.',
  'POST': 'Не удалось отправить данные.'
};

const load = async (route, method = Method.GET, body = null) => {
  const response = await fetch(`${URL}${route}`, { method, body });
  return response.ok ? await response.json() : Promise.reject(errorText[method]);
};
export const getData = async () => await load(Route.getData);
export const sendData = async (body) => await load(Route.sendData, Method.POST, body);
