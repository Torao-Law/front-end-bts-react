import React, { useState } from "react";
import useCategory from "../hooks/useCategory";
import CardCategory from "../components/category";
import ModalAddCategory from "../components/modalAddCategory";

const Home = () => {
  const { data, isLoading } = useCategory();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      {isLoading ? (
        <div>Please wait ....</div>
      ) : (
        <div className="flex">
          {data?.map((item, index) => (
            <div className="me-4" key={index}>
              <CardCategory data={item} />
            </div>
          ))}

          <div className="absolute bottom-24 right-24">
            <button
              onClick={() => setModalIsOpen(true)}
              className="w-16 h-16 rounded-full bg-white shadow-2xl fixed z-50"
            >
              <i className="fa-solid fa-plus font-bold text-4xl"></i>
            </button>
            <ModalAddCategory
              open={modalIsOpen}
              onClose={() => setModalIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
