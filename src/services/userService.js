import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users/register";

export async function register(user) {
  const { data: jwt } = await http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName
  });
  return jwt;
}
