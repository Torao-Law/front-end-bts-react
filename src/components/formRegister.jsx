import { Input, Button, Typography } from "@material-tailwind/react";
import useRegister from "../hooks/useRegister";

const FormRegister = () => {
  const { handleChangeRegister, handleRegister } = useRegister()

  return (
    <form className="mt-8 mb-2">
      <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-5">
          Email
        </Typography>
        <Input
          size="md"
          name="email"
          onChange={handleChangeRegister}
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-5">
          Password
        </Typography>
        <Input
          size="md"
          name="password"
          onChange={handleChangeRegister}
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-5">
          Username
        </Typography>
        <Input
          size="md"
          name="username"
          onChange={handleChangeRegister}
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      
      <Button onClick={handleRegister} className="mt-6" fullWidth>
        sign up
      </Button>
      
    </form>
  );
};

export default FormRegister;
