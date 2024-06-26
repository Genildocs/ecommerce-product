import iconPlus from '../assets/images/icon-plus.svg';
import iconMenus from '../assets/images/icon-minus.svg';
import iconCart from '../assets/images/icon-cart.svg';
import { useState, useEffect } from 'react';
import CartModal from './CartModal';
export default function Description({ isModal, count, setCount }) {
  const [cartValue, setCartValue] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const removeFromCart = () => {
    setCount(0);
    setCartValue(0);
  };

  const addToCart = () => {
    setCartValue(count * 125);
  };

  useEffect(() => {
    const addToCart = () => {
      setCartValue(count * 125);
    };

    addToCart();
  }, [count]);

  return (
    <div className="px-8 md:px-0  md:mx-16 lg:mx-32 2xl:mx-64 md:flex-1 ">
      <span className="uppercase text-gray-500 text-sm font-semibold ">
        sneaker company
      </span>
      <h1 className="text-3xl font-bold ">Fall Limited Edition Sneakers</h1>
      <p className="text-gray-500 mt-3">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center justify-between  mt-4">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">$125.00</span>
          <span className="bg-black text-white px-2 py-1 font-bold rounded-md">
            50%
          </span>
        </div>
        <span className="text-gray-500 line-through font-bold">$250.00</span>
      </div>
      <div className="lg:flex items-center justify-between lg:mt-6">
        <div className="mt-6 lg:mt-0 flex items-center justify-between bg-slate-200 p-4 lg:gap-5 rounded-md">
          <button onClick={decrement}>
            <img src={iconMenus} alt="" />
          </button>
          <p className="font-bold">{count}</p>
          <button onClick={increment}>
            <img src={iconPlus} alt="" />
          </button>
        </div>
        <div className="mt-6 pb-10 lg:pb-0 lg:mt-0">
          <button
            className="flex items-center justify-center gap-4 bg-orange-500 w-full p-4 rounded-md font-bold"
            onClick={addToCart}>
            <img src={iconCart} alt="" />
            Add to cart
          </button>
        </div>
      </div>

      <CartModal
        modal={isModal}
        count={count}
        countValue={cartValue}
        removeCart={removeFromCart}
      />
    </div>
  );
}
