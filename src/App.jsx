import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import LoginPage from "./pages/login";
import { UserContext } from "./store/userContext";
import Home from "./pages/home";
import { PrivateRouteLogin } from "./hooks/privateRoute";
import { setAuthToken } from "./config/apiConfig";

const App = () => {
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate("/auth/login");
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      dispatch({
        type: "USER_SUCCESS",
        payload: {
          token: localStorage.token,
        },
      });
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? null : (
        <Routes>
          <Route element={<PrivateRouteLogin />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      )}
    </>
  );
};

export default App;
