export default function TextSectionMain({ children }) {
  return (
    <section className="px-4 pt-4">
      <div className="grid grid-cols-1 gap-y-4">
        <div>
          <span className="uppercase text-gray-500 text-sm font-bold">
            Sneaker Company
          </span>
          <h1 className="text-gray-950 font-bold text-3xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="font-normal text-sm text-gray-500">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="price flex items-center justify-between">
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
        <div className="md:flex items-center justify-between md:gap-2">
          {children}
        </div>
      </div>
    </section>
  );
}
