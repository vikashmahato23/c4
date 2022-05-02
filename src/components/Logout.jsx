import { useDispatch } from "react-redux";
import { userLogout } from "../Redux/actions";
import { Navigate } from "react-router-dom";

export const Logout = () => {
  const dispatch = useDispatch();
  dispatch(userLogout(false));

  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order
  return <Navigate to={"/"} />;

  return <></>;
};
