import Wrapper from "./Wrapper";

const Hero = () => {
  return (
    <Wrapper>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
              The Luxe Lender
              </h1>

              <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              Indulge yourself with the finest rentals for every luxury occasion. At The Luxe Lender, you can rent coveted designer handbags, watches, jewelry, eyewear, and more without the commitment.
              
              </p>

              <form className="flex w-full gap-2 md:max-w-md">
                <input
                  placeholder="Search for Rental Items"
                  className="w-full flex-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />

                <button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                  Search
                </button>
              </form>
            </div>

            <div className="h-48 mt-3 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="h-full  w-full object-cover object-center"
              />
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
