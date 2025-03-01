import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination,
  Scrollbar,
  Autoplay,
  Thumbs,
  EffectFade,
  A11y,
  Navigation,
} from 'swiper/modules';
import ImageProduct1 from '../assets/images/image-product-1.jpg';
import ImageProduct2 from '../assets/images/image-product-2.jpg';
import ImageProduct3 from '../assets/images/image-product-3.jpg';
import ImageProduct4 from '../assets/images/image-product-4.jpg';
import ImageProduct1Thumb from '../assets/images/image-product-1-thumbnail.jpg';
import ImageProduct2Thumb from '../assets/images/image-product-2-thumbnail.jpg';
import ImageProduct3Thumb from '../assets/images/image-product-3-thumbnail.jpg';
import ImageProduct4Thumb from '../assets/images/image-product-4-thumbnail.jpg';

//Swiper styles
import 'swiper/css/bundle';

export default function SlidesSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const imagesSlides = [
    ImageProduct1,
    ImageProduct2,
    ImageProduct3,
    ImageProduct4,
  ];

  const imagesThumb = [
    ImageProduct1Thumb,
    ImageProduct2Thumb,
    ImageProduct3Thumb,
    ImageProduct4Thumb,
  ];

  return (
    <div className="lg:flex lg:flex-col gap-2">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          Autoplay,
          Thumbs,
          EffectFade,
          A11y,
        ]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        effect="fade"
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="md:h-[300px]  md:rounded-lg lg:w-[450px] lg:h-[450px]">
        {/* Loop images */}
        {imagesSlides.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={'image'}
              className="md:w-full md:h-full md:object-cover"
            />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      {/* Thumbs Swiper -> store swiper instance */}
      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        className="swiper-thumbs lg:rounded-lg lg:w-[450px] ">
        {/* Loop images */}
        {imagesThumb.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={'image'}
              className="h-[88px] w-[88px] rounded-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
