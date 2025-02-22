import React from 'react';
import Logo from '../assets/images/logo.svg';
import Nav from './Nav';
import Cart from './Cart';
import Avatar from '../assets/images/image-avatar.png';

export default function Header() {
  return (
    <header className="px-4 py-8 flex justify-between items-center lg:border-b lg:border-gray-200 lg:mb-[96px]">
      <div className="flex lg:flex-row-reverse gap-3">
        <Nav />
        <div>
          <img src={Logo} alt={'logo'} />
        </div>
      </div>
      <div className="relative flex items-center gap-3">
        <Cart />
        <img src={Avatar} alt="avatar" className="h-6 w-6 md:h-12 md:w-12" />
      </div>
    </header>
  );
}
