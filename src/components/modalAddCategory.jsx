import React from 'react';
import useCategory from '../hooks/useCategory';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';

const ModalAddCategory = ({ open, onClose }) => {
  const { handleSubmit, handleChanges } = useCategory();

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit.mutate(e);
  };

  return (
    <Dialog open={open} handler={onClose}>
      <DialogHeader>Add Category</DialogHeader>
      <DialogBody>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <input
              type="text"
              label="Category Name"
              name="name"
              className="w-full border p-2 border-gray-400"
              onChange={handleChanges}
              required
            />
          </div>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={onClose}
              className="mr-2"
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              color="blue"
              type="submit"
            >
              Add Category
            </Button>
          </DialogFooter>
        </form>
      </DialogBody>
    </Dialog>
  );
};

export default ModalAddCategory;
