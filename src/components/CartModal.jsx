import product_1 from '../assets/images/image-product-1.jpg';
import iconDelete from '../assets/images/icon-delete.svg';
export default function CartModal({ modal, count, countValue }) {
  return (
    <>
      {modal && (
        <div className="bg-white w-[90%] h-[30%]  fixed top-[15%] left-0  z-50 mx-4 p-5 rounded-md">
          <div className="mb-5">
            <h2 className="font-bold ">Cart</h2>
          </div>
          <div className="border-nav"></div>
          {count > 0 ? (
            <div className="mt-5">
              <div className="flex justify-between">
                <img
                  src={product_1}
                  alt=""
                  className="w-[50px] h-[50px] rounded-md"
                />
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <p>$125.00 x {count}</p>
                  <p>${countValue}</p>
                </div>
                <div>
                  <button>
                    <img src={iconDelete} alt="" />
                  </button>
                </div>
              </div>
              <div>
                <button>Checkout</button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="font-bold">Empty Cart</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}