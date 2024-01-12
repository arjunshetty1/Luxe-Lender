"use client";

import FilterProducts from "./Components/FilterProducts";
import Hero from "./Components/Hero";
import ProductsPage from "./Components/ProductsPage";
import Wrapper from "./Components/Wrapper";

const Page = () => {
  return (
    <>
      <Wrapper>
        <Hero />
        <FilterProducts />

        <ProductsPage />
      </Wrapper>
    </>
  );
};

export default Page;
