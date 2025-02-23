import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import IconCart from '../assets/images/icon-cart.svg';
import IconMinus from '../assets/images/icon-minus.svg';
import IconPlus from '../assets/images/icon-plus.svg';
export default function BtnCart({ count, setCount, setIsValid }) {
  useEffect(() => {
    if (count === 0) {
      setIsValid(false);
    }
  }, [count]);

  return (
    <>
      <div className="btn-add my-3 md:my-0 md:flex-1">
        <motion.button className="flex items-center justify-between w-full bg-gray-50 p-5 rounded-lg shadow-(--shadow-Modal)">
          <img
            src={IconMinus}
            alt="icon minus"
            className="cursor-pointer"
            onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
          />
          <span>{count}</span>
          <img
            src={IconPlus}
            alt="icon sum"
            className="cursor-pointer"
            onClick={() => setCount((prev) => prev + 1)}
          />
        </motion.button>
      </div>
      <div className="btn-cart md:flex-1">
        <motion.button
          className=" w-full flex items-center justify-center gap-2 p-5 rounded-lg cursor-pointer shadow-(--shadow-Modal)"
          style={{ background: 'rgb(255, 125, 26)' }}
          whileHover={{ background: 'rgb(255, 171, 106)' }}
          onClick={() => setIsValid(count > 0)}>
          <img src={IconCart} alt="icon cart" />
          <span className="font-bold text-lg text-gray-950">Add to cart</span>
        </motion.button>
      </div>
    </>
  );
}
