// action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const ADD_USER = "ADD_USER";
export const ADD_DATA = "ADD_DATA";

// Action Creators
export const userLogin = (payload) => {
  return {
    type: LOGIN,
    payload: payload,
  };
};

export const userLogout = (payload) => {
  return {
    type: LOGOUT,
    payload: payload,
  };
};

export const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload: payload,
  };
};

export const addData = (payload) => {
  return {
    type: ADD_DATA,
    payload: payload,
  };
};
