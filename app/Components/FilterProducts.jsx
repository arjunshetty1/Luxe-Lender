import Wrapper from "./Wrapper";

const FilterProducts = () => {
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
              <option>Handbags</option>
              <option>Jewelry</option>
              <option>Watches</option>
              <option>Eyewear</option>
              <option>Others</option>
            </select>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default FilterProducts;
