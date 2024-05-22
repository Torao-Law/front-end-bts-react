import { Card, Typography } from "@material-tailwind/react";
import React from "react";
import FormLogin from "../components/formLogin";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <Card
      className="border border-gray-300 w-96 mx-auto mt-16 p-4"
      color="transparent"
      shadow={true}
    >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to login.
      </Typography>

      <div>
        <FormLogin />
      </div>

      <Typography color="gray" className="mt-4 text-center font-normal">
        Don't have an account yet?{" "}
        <button className="font-medium text-gray-900" onClick={() => navigate("/auth/register")}>
          Sign Up
        </button>
      </Typography>
    </Card>
  );
};

export default LoginPage;
