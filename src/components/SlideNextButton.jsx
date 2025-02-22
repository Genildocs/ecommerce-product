import { React } from 'react';
import { useSwiper } from 'swiper/react';
import {SlArrowRightCircle} from "react-icons/sl";
export default function SlideNextButton(){
    const swiper = useSwiper();
    return (
        <button className="absolute top-1/2 right-2 z-50" onClick={()=> swiper.slideNext()}>
            <SlArrowRightCircle className="h-[30px] w-[30px] cursor-pointer fill-amber-50" />
        </button>
    );
}