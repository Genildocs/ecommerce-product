import Logo from "../assets/images/logo.svg";
import Cart from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import Menu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-close.svg";
import MenuMobile from "./MenuMobile";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
export default function NavBar() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
    if (isSmallDevice) {
      document.body.classList.toggle("overflow-hidden");
    }
  };

  return (
    <nav className="h-[10vh] md:h-[15vh] flex items-center justify-between px-8 md:px-16 lg:px-32 2xl:px-64 md:border-nav relative">
      <section className="flex items-center gap-2 ">
        <button className="z-50 md:hidden" onClick={handleIsOpen}>
          {isOpen ? (
            <img src={iconClose} alt="close" />
          ) : (
            <img src={Menu} alt="menu" />
          )}
        </button>
        <img src={Logo} alt="logo" className="md:mr-6 z-50" />
        {/* Menu Mobile */}
        <MenuMobile isOpen={isOpen} />
        {/* Menu Desktop */}
        <div>
          <ul className="hidden md:flex items-center gap-5 opacity-50 ">
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
          </ul>
        </div>
      </section>
      <section className="flex items-center gap-3 md:gap-6">
        <img src={Cart} alt="cart" className="cursor-pointer" />
        <img
          src={Avatar}
          alt="avatar"
          className="w-[30px] h-[30px] md:w-[65px] md:h-[65px]"
        />
      </section>
    </nav>
  );
}
