import { Api } from './Api';

export const getAll = () => Api.get('/character');

export const ApiService = {
  getAll,
};
