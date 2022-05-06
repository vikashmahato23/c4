import { useDispatch } from "react-redux";
import { userLogout } from "../Redux/actions";
import { Navigate } from "react-router-dom";

export const Logout = () => {
  const dispatch = useDispatch();
  dispatch(userLogout(false));

  return <Navigate to={"/"} />;

  return <></>;
};
