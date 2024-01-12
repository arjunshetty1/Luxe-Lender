import Wrapper from "./Wrapper";
import { useEffect, useState } from "react";
import { product } from "../Services/apiProducts";

const FilterProducts = () => {
  const [ListBrands, setListBrands] = useState(null);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await product();

      setListBrands(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //Category filter logic
  const brands = new Set();
  ListBrands?.products?.forEach((item) => {
    brands.add(item.categories);
  });
  const brandsArray = [...brands];

  return (
    <>
      <Wrapper>
        <div className="w-full flex justify-between bg-white mt-10 gap-4 md:gap-0">
          <h1 className="text-black font-extralight text-lg">
            Discover Our Curated Collection Of The Finest Luxury Brands
          </h1>

          <div className="flex-col gap-3 md:flex-row flex">
            <select className="select select-bordered w-full max-w-xs">
              <option>Max to Min</option>
              <option>Min to Max</option>
            </select>

            <select className="select select-bordered w-full max-w-xs">
              {brandsArray?.map((item, i) => {
                return <option key={i + 2}>{item}</option>;
              })}
            </select>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default FilterProducts;
