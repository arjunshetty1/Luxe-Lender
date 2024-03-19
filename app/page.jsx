"use client";
import FilterProducts from "./Components/FilterProducts";
import Hero from "./Components/Hero";
import ProductsPage from "./Components/ProductsPage";
import Wrapper from "./Components/Wrapper";
import { useEffect, useState } from "react";
import { product } from "./Services/apiProducts";
import Cta from "./Components/cta";

const Page = () => {
  console.log("Hello World");
  const [Prddata, setPrddata] = useState(null);
  const [CategoryFilter, SetCategoryFilter] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await product();
      console.log("res", response);
      setPrddata(response);
      SetCategoryFilter(response);
    } catch (error) {
      console.log(error);
    }
  };

  //category filter render logic
  const fetchCategoryFilter = (category) => {
    const filteredData = CategoryFilter?.products?.filter((item) => {
      return item.categories === category;
    });
    setPrddata({ ...CategoryFilter, products: filteredData }); //overriding products with filterData
  };

  return (
    <>
      <Wrapper>
        <Hero />
        <FilterProducts fetchCategoryFilter={fetchCategoryFilter} />
        <ProductsPage Prddata={Prddata} />
        <Cta />
      </Wrapper>
    </>
  );
};

export default Page;
