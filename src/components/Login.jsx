import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, userLogin } from "../Redux/actions";
import { Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtextedRoute";
import { store } from "../Redux/store";

export const Login = () => {
  const dispatch = useDispatch();
  const isuser = useSelector((store) => store.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    let users = await fetch("http://localhost:8080/users");
    users = await users.json();

    for (let i = 0; i < users.length; i++) {
      if (users[i].username == username) {
        dispatch(addUser(users[i]));
        dispatch(userLogin(true));
      }
    }
  };
  console.log(isuser);
  if (isuser.role == "admin") {
    return <Navigate to={"/orders"} />;
  }

  if (isuser.role == "client") {
    return <Navigate to={"/neworder"} />;
  }
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="submit" onClick={() => handleLogin()}>
        Login
      </button>
    </div>
  );
};
