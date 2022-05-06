import { useSelector } from "react-redux";
import { store } from "../Redux/store";


export const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.isLoggedIn);


  return children;

};
