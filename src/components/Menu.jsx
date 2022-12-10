import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/bundle';

const Menu = () => {
    return (
        <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
            <SwiperSlide>카드</SwiperSlide>
            <SwiperSlide>카드</SwiperSlide>
            <SwiperSlide>카드</SwiperSlide>
        </Swiper>
    );
};

export default Menu;
