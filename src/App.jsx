import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import SlidesSwiper from './components/SlidesSwiper.jsx';
import TextSectionMain from './components/TextSectionMain.jsx';
import BtnCart from './components/BtnCart.jsx';

export default function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <div className="flex flex-col justify-between min-h-full">
      <Header count={count} isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex-1 lg:flex lg:gap-16">
        <SlidesSwiper />
        <TextSectionMain>
          <BtnCart count={count} setCount={setCount} />
        </TextSectionMain>
      </main>
      <Footer />
    </div>
  );
}
