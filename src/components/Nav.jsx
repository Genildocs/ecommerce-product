import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import IconMenu from '../assets/images/icon-menu.svg';
import IconClose from '../assets/images/icon-close.svg';
import { div } from 'motion/react-client';

export default function Nav({ isOpen, setIsOpen }) {
  const listMenu = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  const variantsModal = {
    open: {
      left: 0,
      transition: { duration: 0.6 },
    },
    close: {
      left: '-110%',
      transition: { duration: 0.8 },
    },
  };

  const variantsOverlay = {
    openOverlay: {
      opacity: 0.7,
      visibility: 'visible',
      transition: { duration: 0.3 },
    },
    closeOverlay: {
      opacity: 0,
      visibility: 'hidden',
    },
  };

  const variantsMenu = {
    active: { opacity: 1, y: 0, visibility: 'visible' },
    inactive: { opacity: 0, y: -20, visibility: 'hidden' },
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav>
      {/*Menu mobile*/}
      <div className="block lg:hidden">
        {/* Buttons OPEN - CLOSE MODAL MOBILE-TABLET */}
        <button
          className={`${
            isOpen ? 'hidden' : 'block'
          } cursor-pointer relative z-50`}
          onClick={() => setIsOpen(!isOpen)}>
          <img src={IconMenu} alt="icon" />
        </button>
        <button
          className={`${
            isOpen ? 'block' : 'hidden'
          } cursor-pointer relative z-50`}
          onClick={() => setIsOpen(!isOpen)}>
          <img src={IconClose} alt="icon" />
        </button>
        {/* MODAL */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <>
              <motion.div
                variants={variantsOverlay}
                className="absolute top-0 left-0 w-[100vw] h-screen bg-black bg-opacity-50 z-10"
                initial="closeOverlay"
                animate="openOverlay"
                exit="closeOverlay"
              />
              <motion.div
                variants={variantsModal}
                initial="close"
                animate="open"
                exit="close"
                className="absolute bg-white left-0 top-0  w-[70%] h-screen z-20">
                <motion.ul
                  className="absolute  left-6 top-[20%] flex flex-col justify-between gap-5 text-black  text-3xl  font-light"
                  variants={variantsMenu}
                  initial="inactive"
                  animate="active">
                  {listMenu.map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}>
                      <a href="#" className="text-gray-500 hover:text-gray-900">
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      {/* Menu desktop */}
      <div className="hidden lg:block">
        <ul>
          {listMenu.map((item, index) => (
            <li key={index} className="inline-block mx-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 relative before:absolute before:-bottom-[230%] before:left-0 before:w-0 before:h-0.5 before:bg-orange before:transition-all before:duration-300 hover:before:w-full">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
