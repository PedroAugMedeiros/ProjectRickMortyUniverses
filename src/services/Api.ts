import axios from "axios";

export const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});
