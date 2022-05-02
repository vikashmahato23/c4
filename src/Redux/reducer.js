import { ADD_USER, LOGIN, LOGOUT, ADD_DATA } from "./actions";

const init = {
  isLoggedIn: false,
  user: {
    username: "",
    password: "",
    role: "",
  },
  orders: [],
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...store, isLoggedIn: payload };

    case LOGOUT:
      return { ...store, isLoggedOut: payload };

    case ADD_USER:
      return { ...store, user: payload };

    case ADD_DATA:
      return { ...store, orders: payload };
    default:
      return store;
  }
};
