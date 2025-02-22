import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import SlidesSwiper from './components/SlidesSwiper.jsx';
import TextSectionMain from './components/TextSectionMain.jsx';
import BtnCart from './components/BtnCart.jsx';

export default function App() {
  return (
    <div className="flex flex-col justify-between min-h-full">
      <Header />
      <main className="flex-1 lg:flex">
        <SlidesSwiper />
        <TextSectionMain>
          <BtnCart />
        </TextSectionMain>
      </main>
      <Footer />
    </div>
  );
}
