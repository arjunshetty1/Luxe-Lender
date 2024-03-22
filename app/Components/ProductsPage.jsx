"use client";
import Wrapper from "./Wrapper";
import Card from "./Card";

const ProductsPage = ({ Prddata, isloading }) => {
  return (
    <Wrapper>
      {isloading ? (
        <div>
          <section className="bg-white ">
            <div className="container px-6 py-10 mx-auto animate-pulse">
              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4">
                <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>

                <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>

                <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>

                <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>

                <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>

                <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>

                <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>

                <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
            {Prddata?.products?.map((item) => {
              return <Card item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsPage;
