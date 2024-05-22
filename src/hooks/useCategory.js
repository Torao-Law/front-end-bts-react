import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ApiConfig } from "../config/apiConfig";

const useCategory = () => {
  const [category, setCategory] = useState({
    name: "",
  });

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const response = await ApiConfig.get("/checklist");

        return response.data.data;
      } catch (error) {
        throw error;
      }
    },
  });

  const handleChanges = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = useMutation({
    mutationFn: async (e) => {
      try {
        e.preventDefault();

        const data  = await ApiConfig.post(`/checklist`, category);
        console.log(data);
      } catch (error) {
        throw error;
      }
    },
    onSuccess: async () => {
      refetch();
    },
    onError: (error) => {
      console.log("Mutation error:", error);
    },
  });

  return {
    data,
    isLoading,
    handleChanges,
    handleSubmit,
  };
};

export default useCategory;
