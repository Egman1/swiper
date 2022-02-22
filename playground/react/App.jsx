/* eslint-disable no-restricted-globals */
import React from 'react';
// eslint-disable-next-line
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// eslint-disable-next-line
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

const App = () => {
  window._swipper = React.createRef();

  const slideBy = 2;
  return (
    <main>
      <Swiper
        ref={window._swipper}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        // loopedSlides={slideBy * 2}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        autoplay={{reverseDirection: false, slideBy}}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
      </Swiper>
    </main>
  );
};

export default App;
