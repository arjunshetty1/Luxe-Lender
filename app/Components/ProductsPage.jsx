"use client";

import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { product } from "../Services/apiProducts";
import Card from "./Card";

const ProductsPage = () => {
  const [Prddata, setPrddata] = useState(null);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await product();
      setPrddata(response);
    } catch (error) {
      console.log(error);
    }
  };

  //category filter render logic
  const fetchCategoryFilter = (category) => {
    const filteredData = Prddata?.products?.filter((item) => {
      return item.categories === category;
    });
    setPrddata({ ...Prddata, products: filteredData });
  };
console.log("New with IMG",Prddata);
  return (
    <Wrapper>
      <div className="grid mt-16 md:grid-cols-4 gap-8">
        {Prddata?.products?.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>

      
    </Wrapper>
  );
};

export default ProductsPage;

export { fetchCategoryFilter };
