import React, { useState } from 'react';
import { motion } from 'motion/react';
import ImageCart from '../assets/images/icon-cart.svg';
export default function Cart({ count }) {
  const [openModalCart, setOpenModalCart] = useState(false);

  const variantsModal = {
    open: {
      y: '80%',
      opacity: 1,
      visibility: 'visible',
      transition: { ease: 'easeOut', duration: 0.5 },
    },
    closed: {
      y: '50%',
      opacity: 0,
      visibility: 'hidden',
      transition: { ease: 'easeInOut', duration: 0.5 },
    },
  };
  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => setOpenModalCart(!openModalCart)}>
        <img src={ImageCart} alt="cart" />
      </button>
      {count > 0 && (
        <div className="bg-orange  w-4 h-4 rounded-full absolute top-0 md:top-2 left-3 flex items-center justify-center text-xs text-white">
          {count}
        </div>
      )}
      <motion.div
        className="modal absolute right-0 w-[22rem] h-[16rem] p-3 bg-white z-[5] rounded-lg shadow-(--shadow-Modal) grid justify-items-center"
        variants={variantsModal}
        initial="closed"
        animate={openModalCart ? 'open' : 'closed'}>
        <span className="font-bold justify-self-start">Cart</span>
        <div className={`${count <= 0 ? 'block' : 'hidden'}`}>
          <p className="font-bold">Cart is empty</p>
        </div>
        <div
          className={`${
            count <= 0 ? 'hidden' : 'flex'
          } justify-self-start items-center justify-between w-full`}>
          <div>imagem</div>
          <div>texto</div>
          <div>icone lixeira</div>
        </div>
        <button>Checkout</button>
      </motion.div>
    </>
  );
}
