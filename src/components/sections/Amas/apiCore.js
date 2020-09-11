import { API } from "../../../config";

export const read = (routeName) => {
  return fetch(`${API}/${routeName}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
