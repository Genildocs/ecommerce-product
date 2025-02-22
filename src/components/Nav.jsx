import React from 'react';
import IconMenu from '../assets/images/icon-menu.svg';
export default function Nav() {
  const listMenu = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  return (
    <nav>
      {/*Menu mobile*/}
      <div className="block md:hidden">
        <button>
          <img src={IconMenu} alt="icon" />
        </button>
        <ul></ul>
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
