import React, { useState } from 'react';
import { motion } from 'motion/react';
import ImageCart from '../assets/images/icon-cart.svg';
import IconDelete from '../assets/images/icon-delete.svg';
import ImageProductThum from '../assets/images/image-product-1-thumbnail.jpg';
export default function Cart({ count, setCount, isValid }) {
  const [openModalCart, setOpenModalCart] = useState(false);

  const value = 125 * count;

  const variantsModal = {
    open: {
      y: '80%',
      opacity: 1,
      visibility: 'visible',
      transition: { ease: 'easeOut', duration: 0.3 },
    },
    closed: {
      y: '50%',
      opacity: 0,
      visibility: 'hidden',
      transition: { ease: 'easeInOut', duration: 0.3 },
    },
  };
  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => setOpenModalCart(!openModalCart)}>
        <img src={ImageCart} alt="cart" />
      </button>
      {isValid && (
        <div className="bg-orange  w-4 h-4 rounded-full absolute top-0 md:top-2 left-3 flex items-center justify-center text-xs text-white">
          {count}
        </div>
      )}
      <motion.div
        className="modal absolute right-0 w-[22rem] h-[16rem] p-5 bg-white z-[5] rounded-lg shadow-(--shadow-Modal) grid grid-rows-[50px_1fr_50px]  justify-items-center"
        variants={variantsModal}
        initial="closed"
        animate={openModalCart ? 'open' : 'closed'}>
        <div className="w-full justify-self-start border-b-[1px] border-gray-200 py-2">
          <span className="font-bold ">Cart</span>
        </div>
        <div className={`${isValid ? 'hidden' : 'block'} self-center`}>
          <p className="font-bold">Cart is empty</p>
        </div>
        <div
          className={`${
            isValid ? 'flex' : 'hidden'
          } justify-self-start items-center justify-between w-full`}>
          <div>
            <img
              src={ImageProductThum}
              alt="image product"
              className="h-[50px] w-[50px] rounded-lg object-cover"
            />
          </div>
          <div>
            <span>Fall Limited Edition Sneakers</span>
            <div className="flex items-center gap-3.5">
              <span className="text-gray-500">$125 x {count}</span>
              <span className="font-bold">${value}</span>
            </div>
          </div>
          <button className="cursor-pointer" onClick={() => setCount(0)}>
            <img src={IconDelete} alt="icon delete" />
          </button>
        </div>
        <button
          className={`bg-orange w-full ${
            isValid ? 'flex' : 'hidden'
          } items-center justify-center p-2 rounded-lg cursor-pointer font-bold`}>
          Checkout
        </button>
      </motion.div>
    </>
  );
}
