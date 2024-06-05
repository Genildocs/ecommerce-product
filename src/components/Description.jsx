export default function Description() {
  return (
    <div className="px-8">
      <span className="uppercase text-gray-500 text-sm font-semibold ">
        sneaker company
      </span>
      <h1 className="text-2xl font-bold">Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center gap-4 mt-4">
        <span className="text-3xl font-bold">$125.00</span>
        <span className="bg-black text-white px-2 py-1">50%</span>
      </div>
      <span className="text-gray-500 line-through">$250.00</span>
    </div>
  );
}
