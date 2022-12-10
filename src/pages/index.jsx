import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const CardWrapper = styled.div`
    padding: 15px;
    width: 350px;
    height: 500px;
    border: 1px solid #e5e5e5;
    border-radius: 15px;
    box-shadow: 30px 30px 30px 0 rgba(0, 0, 0, 0.3);
`;

const Main = () => {
    return (
        <CardContainer>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CardWrapper>카드내용물 채워넣기</CardWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <CardWrapper>카드내용물 채워넣기</CardWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <CardWrapper>카드내용물 채워넣기</CardWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <CardWrapper>카드내용물 채워넣기</CardWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <CardWrapper>카드내용물 채워넣기</CardWrapper>
                </SwiperSlide>
            </Swiper>
        </CardContainer>
    );
};

export default Main;
