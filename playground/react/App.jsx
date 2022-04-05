/* eslint-disable no-restricted-globals */
import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay} from '../../build/core';
import { Swiper, SwiperSlide } from '../../build/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const App = () => {

  const slideBy = 2;
  return (
    <main>
      <Swiper
        onSwiper={(swiper) => (window.swiper = swiper)}
        slidesPerView={3}
        spaceBetween={50}
        navigation
        loop
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        autoplay={{reverseDirection: false, slideBy}}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </main>
  );
};

export default App;
