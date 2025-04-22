import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

function SingleProduct() {
  const { product } = useLoaderData();
  console.log("testProduct", product);

  return <div>SingleProduct</div>;
}

export default SingleProduct;
