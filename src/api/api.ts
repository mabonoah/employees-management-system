import axios from "axios";
import { errorToast } from "../utils/toast";

const api = axios.create({
  baseURL: "http://localhost:3003/"
});

export async function getAll(path: string) {
  return api.get(path)
    .then((response) => response.data)
    .catch((error) => errorHandler(error));
}

export async function post(path: string, data: any) {
  return api.post(path, data)
    .then()
    .catch((error) => errorHandler(error));
}

export async function patch(path: string, data: any) {
  return api.patch(path, data)
    .then()
    .catch((error) => errorHandler(error));
}

function errorHandler(error: any) {
  const errorMessage = error.message;
  errorToast(`${errorMessage}!`);
}
