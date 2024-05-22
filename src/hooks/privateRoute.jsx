import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../store/userContext";

export function PrivateRouteLogin() {
  const [state] = useContext(UserContext);

  console.log(state);

  if (!state.isLogin) {
    return <Navigate to="/auth/login" />;
  }
  return <Outlet />;
}
