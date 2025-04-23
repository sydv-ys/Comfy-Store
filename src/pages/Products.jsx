import React from "react";
import Filter from "../components/Filters";
import { PaginationContainer, ProductsContainer } from "../components";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";


const url = "/products";

export const loader = async ({ request }) => {
  const  response  = await customFetch(url);

  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

function Products() {
  const loader = useLoaderData();

  return (
    <div>
      <Filter />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
}

export default Products;
