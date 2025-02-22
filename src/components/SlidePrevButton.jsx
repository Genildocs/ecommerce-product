import { React } from 'react';
import { useSwiper } from 'swiper/react';
import {SlArrowLeftCircle} from "react-icons/sl";
export default function SlidePrevButton(){
    const swiper = useSwiper();
    return (
        <button className="absolute top-1/2 left-2 z-50" onClick={()=> swiper.slidePrev()}>
            <SlArrowLeftCircle className="h-[30px] w-[30px] cursor-pointer fill-amber-50" />
        </button>
    );
}