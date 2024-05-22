import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiConfig, setAuthToken } from "../config/apiConfig";
import { UserContext } from "../store/userContext";

const useLogin = () => {
  const navigate = useNavigate();
  const [_, dispatch] = useContext(UserContext);
  const [formLogin, setFormLogin] = useState({
    password: "",
    username: "",
  });

  const handleChanges = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      console.log(formLogin);

      const response = await ApiConfig.post("/login", formLogin);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data,
      });

      setAuthToken(localStorage.token);

      navigate("/");
    } catch (err) {
      throw err;
    }
  };

  return {
    formLogin,
    handleChanges,
    handleLogin,
  };
};

export default useLogin;
