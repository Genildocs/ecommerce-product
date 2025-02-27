export default function TextSectionMain({ children }) {
  return (
    <section className="px-4 pt-4 lg:w-[28rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-10">
        <div className="lg:col-span-full">
          <span className="uppercase text-gray-500 inline-block text-sm font-bold lg:mb-5">
            Sneaker Company
          </span>
          <h1 className="text-gray-950 font-bold text-3xl lg:text-[44px] lg:mb-5">
            Fall Limited Edition Sneakers
          </h1>
          <p className="font-normal text-sm text-gray-500">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="price flex items-center justify-between lg:flex-col lg:items-start lg:gap-2">
          <div className="flex items-center gap-3">
            <span className="font-bold text-3xl">$125.00</span>
            <span className="bg-gray-950 text-white font-bold text-lg rounded-sm py-1 px-2">
              50%
            </span>
          </div>
          <div>
            <span className="line-through font-bold text-lg text-gray-500">
              $250.00
            </span>
          </div>
        </div>
        <div className="md:flex items-center justify-between md:gap-2 lg:gap-5 lg:col-span-full">
          {children}
        </div>
      </div>
    </section>
  );
}
