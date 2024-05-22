import React from "react";
import FormRegister from "../components/formRegister";
import { Card, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()

  return (
    <Card className="border border-gray-300 w-96 mx-auto mt-16 p-4" color="transparent" shadow={true}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>

      <div>
        <FormRegister />
      </div>

      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?{" "}
        <button className="font-medium text-gray-900" onClick={() => navigate("/auth/login")}>
          Sign In
        </button>
      </Typography>
    </Card>
  );
};

export default Register;
