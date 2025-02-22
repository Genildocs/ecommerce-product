import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import ImageProduct1 from '../assets/images/image-product-1.jpg';
import ImageProduct2 from '../assets/images/image-product-2.jpg';
import ImageProduct3 from '../assets/images/image-product-3.jpg';
import ImageProduct4 from '../assets/images/image-product-4.jpg';
import SlideNextButton from './SlideNextButton.jsx';
import SlidePrevButton from './SlidePrevButton.jsx';
//Swiper styles
import 'swiper/css/bundle';

export default function SlidesSwiper() {
  return (
    <>
      <Swiper
        modules={[Pagination, Scrollbar, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="md:h-[300px]  md:rounded-lg lg:w-[450px] lg:h-full">
        <SwiperSlide>
          <img
            src={ImageProduct1}
            alt={'image'}
            className="imageSwiper-container "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImageProduct2}
            alt={'image'}
            className="imageSwiper-container"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImageProduct3}
            alt={'image'}
            className="imageSwiper-container"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImageProduct4}
            alt={'image'}
            className="imageSwiper-container"
          />
        </SwiperSlide>
        <SlidePrevButton />
        <SlideNextButton />
      </Swiper>
    </>
  );
}
