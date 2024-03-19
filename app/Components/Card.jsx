"use client";
import { Toaster } from "sonner";
import { useContext, useState } from "react";
import DatePickerUi from "./DatePickerUi";
import { format } from "date-fns";
import { CartItemsContext } from "../CartContext";
import Image from "next/image";


const Card = ({ item }) => {
  const { Cartitems } = useContext(CartItemsContext);
  const [startDate, setStartDate] = useState(new Date("2024/01/09"));
  const [endDate, setEndDate] = useState(new Date("2024/01/09"));

  const start = format(startDate, "yyyy-MM-dd");
  const end = format(endDate, "yyyy-MM-dd");

  const [send, setsend] = useState({
    productName: item.productName,
    productPrice: item.price,
    productId: item.id,
    StartDate: start,
    enddate: end,
    Image: item.image[0].url,
  });

  const addToCart = () => {
    Cartitems(send);
  };

  // const handleSubmit = async () => {
  //   console.log(send);
  //   const response = await createOrder(send);
  //   console.log(response);
  // };

  return (
    <>
      <div
        className="card md:w-72 w-[15rem]   bg-base-100 shadow-xl transition ease-in-out delay-150 
       hover:-translate-y-1 hover:scale-110 hover:text-black  hover:bg-slate-50 hover:outline 
       hover:outline-3 hover:outline-offset-2 hover:duration-200"
      >
        <figure>
          <Image
            src={item.image[0].url}
            width={500}
            height={500}
            quality={100}
            alt="Product Image"
            className="w-[18rem] h-64"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.productName}</h2>

          <div className="card-actions flex justify-between items-center">
            <h2 className="font-medium">{item.price}/Per Day</h2>
            <button
              className="btn"
              onClick={() => document.getElementById(item.id).showModal()}
            >
              View
            </button>
            <div className="px-6 md:px-0">
              <dialog key={item.id} id={item.id} className="modal text-white">
                <div className="modal-box min-w-[20rem]  md:min-w-[50rem]  lg:min-w-[70rem] p-15">
                  <div className="md:flex md:flex-row flex-col gap-14 mt-12 ">
                    <div>
                      <Image
                        src={item.image[0].url}
                        width={1000}
                        height={1000}
                        className="rounded-lg left  w-50 md:w-80"
                        alt="ProductImage"
                      />
                    </div>
                    <div className="right flex mt-20 md:mt-0 flex-col gap-3 w-1/2">
                      <p className="uppercase md:text-lg text-sm font-medium">
                        {item.productName}
                      </p>
                      <DatePickerUi
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                      />
                      <p
                        className="md:text-lg text-sm relative top-5 font-normal"
                        n
                      >
                        {item.price}/Per Day
                      </p>
                      <Toaster
                        className="absolute mt-[100vh]"
                        position="bottom-left"
                      />
                      <button
                        type="button"
                        class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                       focus:ring-blue-300 font-medium rounded-lg  text-sm px-3 py-2.5  pl-2 text-center inline-flex
                        items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => {
                          addToCart();
                        }}
                      >
                        Add to Cart
                        <svg
                          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
