import { API } from "../config";

export const createAma = (userId, ama) => {
  return fetch(`${API}/create/ama/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: ama,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
