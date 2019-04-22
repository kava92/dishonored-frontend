import { callApi } from "./helpers";

export function login({ username, password }) {
  console.log("jestem ttutaj");
  return callApi("/user/login", {
    method: "post",
    body: {
      username,
      password
    }
  });
}
