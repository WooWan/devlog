import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Product = {
  name: string;
  price: number;
  id: number;
};
const Fruits = () => {
  const [filter, setFilter] = useState("");
  const { data, refetch } = useQuery<Product[]>(
    ["products"],
    async () => {
      const response = await axios.get("/fruits", {
        params: {
          name: filter,
        },
      });
      return response.data;
    },
    {
      enabled: true,
    }
  );

  const searchData = () => {
    refetch();
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") refetch();
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        onKeyDown={handleSearch}
      />
      <button onClick={searchData}>검색</button>
      {data?.map((product) => (
        <div key={product.id}>
          <span>{product.id}</span>
          <h1>{product.name}</h1>
        </div>
      ))}
      {data?.length === 0 && <div>검색 결과가 없습니다.</div>}
    </div>
  );
};

export default Fruits;
