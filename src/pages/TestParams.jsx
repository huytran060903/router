import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export async function clientLoader({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = res.json();
  return product;
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}
const TestParams = () => {
  const { title, description } = useLoaderData();

  const { id } = useParams();

  return (
    <>
      <div>Id: {id}</div>
      <div>Title: {title}</div>
      <div>Des: {description}</div>
    </>
  );
};

export default TestParams;
