import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import "./CarouselComponent.css";
import carouselImage from "../../images/carousel-image.png";

SwiperCore.use([Navigation, Pagination]);

const CarouselComponent = () => {
  const slideLength = Array(6).fill(0);
  return (
    <div className="mt-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slideLength.map((elem, index) => (
          <SwiperSlide >
            <img src={carouselImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
