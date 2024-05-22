import {
  Card,
  Typography,
  Button,
  Checkbox,
} from "@material-tailwind/react";

const CardCategory = ({ data }) => {
  return (
    <Card className="mt-6 w-96 p-4">
      <Typography variant="h5" className="mt-4 ms-2 bg-blue-gray-900 rounded-lg p-4 text-white">
        {data.name}
      </Typography>

      {data?.items?.map((item, index) => (
        <p key={index}>
          <Checkbox label={item.name} />
        </p>
      ))}

      <Button className="mt-4">Delete Todo</Button>
    </Card>
  );
};

export default CardCategory;
