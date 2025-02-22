import React from 'react';
import IconCart from '../assets/images/icon-cart.svg';
import IconMinus from '../assets/images/icon-minus.svg';
import IconPlus from '../assets/images/icon-plus.svg';
export default function BtnCart() {
  return (
    <>
      <div className="btn-add my-3 md:my-0 md:flex-1">
        <button className="flex items-center justify-between w-full bg-gray-50 p-5 rounded-lg ">
          <img src={IconMinus} alt="icon minus" className="cursor-pointer" />
          <span>0</span>
          <img src={IconPlus} alt="icon sum" className="cursor-pointer" />
        </button>
      </div>
      <div className="btn-cart md:flex-1">
        <button className="bg-orange w-full flex items-center justify-center gap-2 p-5 rounded-lg cursor-pointer ">
          <img src={IconCart} alt="icon cart" />
          <span className="font-bold text-lg text-gray-950">Add to cart</span>
        </button>
      </div>
    </>
  );
}
