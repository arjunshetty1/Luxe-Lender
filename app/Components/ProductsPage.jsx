"use client";
import Wrapper from "./Wrapper";
import Card from "./Card";

const ProductsPage = ({ Prddata }) => {
  return (
    <Wrapper>
      <div className="grid mt-16 md:grid-cols-2 lg:grid-cols-4  gap-8">
        {Prddata?.products?.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ProductsPage;
