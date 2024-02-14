"use client";
import { useState } from "react";

export function useCustomOptimistic(initialState) {
  const [data, setData] = useState(initialState);

  const updateOptimistic = (newData, updateFunc) => {
    setData((prevData) => {
      const updatedData = updateFunc(prevData, newData);
      return updatedData;
    });
  };

  return [data, updateOptimistic];
}
