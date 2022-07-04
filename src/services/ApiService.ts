import { Api } from './Api';

const getAll = () => Api.get("/character");

export const ApiService = {
 getAll,
}
