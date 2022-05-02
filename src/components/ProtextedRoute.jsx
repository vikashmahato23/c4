import { useSelector } from "react-redux";
import { store } from "../Redux/store";

// /orders and /neworder are protected routes
export const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.isLoggedIn);

  //   if (isAuth)
  return children;
  //   else return;
};
