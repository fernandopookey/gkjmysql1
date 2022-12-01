import React from "react";
import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img className="object-cover w-full h-screen" src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="object-cover w-full h-screen" src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="object-cover w-full h-screen" src={slider3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
