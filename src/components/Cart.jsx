import React from 'react';
import ImageCart from '../assets/images/icon-cart.svg';
export default function Cart({ count }) {
  return (
    <>
      <button className="cursor-pointer">
        <img src={ImageCart} alt="cart" />
      </button>
      {count > 0 && (
        <div className="bg-orange  w-4 h-4 rounded-full absolute top-0 left-3 flex items-center justify-center text-xs text-white">
          {count}
        </div>
      )}
    </>
  );
}
