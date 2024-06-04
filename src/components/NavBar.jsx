import Logo from '../assets/images/logo.svg';
import Cart from '../assets/images/icon-cart.svg';
import Avatar from '../assets/images/image-avatar.png';
import Menu from '../assets/images/icon-menu.svg';
import MenuMobile from './MenuMobile';
import { useState } from 'react';
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="h-[10vh] flex items-center justify-between mx-8 md:mx-16 lg:mx-32 2xl:mx-64 md:border-nav relative">
      <section className="flex items-center gap-2 ">
        <img
          src={Menu}
          alt="menu"
          className="cursor-pointer z-50 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
        <img src={Logo} alt="logo" className="md:mr-6" />
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
