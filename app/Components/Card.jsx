import DatePickerUi from "./DatePickerUi";

const Card = ({ item }) => {
  return (
    <>
      <div className="card w-72  bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Product Image"
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
              Rent Now
            </button>

            <dialog key={item.id} id={item.id} className="modal">
              <div className="modal-box md:min-w-[1200px] md:min-h-[460px] p-10">
                <div className="flex gap-14 mt-12 ">
                  <div className="left w-1/2">
                    <img
                    className="rounded-lg "
                      src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt=""
                    />
                  </div>
                  <div className="right flex flex-col gap-3 w-1/2">
                    <p className="uppercase text-xl font-medium">{item.productName}</p>
                    <DatePickerUi />
                    <p className="text-xl relative top-5 font-normal">Total Cost {item.price}</p>
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Proceed
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
    </>
  );
};

export default Card;
