"use client";
import { useEffect, useState } from "react";
import FilterProducts from "./Components/FilterProducts";
import Hero from "./Components/Hero";
import Wrapper from "./Components/Wrapper";
import { product } from "./Services/apiProducts";

const Page = () => {
  const [Prddata, setPrddata] = useState({ products: [] }); // Initialize Prddata as an object with an empty products array
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await product();
      console.log(response);
      setPrddata(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Wrapper>
        <Hero />
        <FilterProducts />

        {Prddata.products.map((item) => (
          <h1 key={item.id}>{item.productName}</h1> // Accessing item.price instead of 'item.price'
        ))}
      </Wrapper>
    </>
  );
};

export default Page;
