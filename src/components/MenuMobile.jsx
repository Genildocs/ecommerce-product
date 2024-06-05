import { motion } from "framer-motion";
export default function MenuMobile({ isOpen }) {
  const menu = {
    open: { x: 0, transition: { duration: 0.5 } },
    closed: { x: -100, transition: { duration: 0.5 } },
  };
  return (
    <>
      {isOpen && (
        <motion.div
          className="absolute top-0  left-[-32px] bg-black min-h-screen w-[50vw] z-40 md:hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menu}
        >
          <motion.ul className="absolute top-[10%] left-5 flex flex-col items-center gap-8 text-white">
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </motion.ul>
        </motion.div>
      )}
    </>
  );
}
