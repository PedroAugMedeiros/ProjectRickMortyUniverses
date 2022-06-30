import { Api } from './Api';
import { ApiInterface } from '../interfaces';

const getAll = () => Api.get("/character");

export const ApiService = {
 getAll,
}
