import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import image1 from './1.jpeg'
import image2 from './2.jpeg'

const FeedContent = () => {
  return (
      <StyledSwiper
          direction="vertical"
          autoHeight={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}

      >
        <StyledSwiperSlide>
          <img src={image2} alt=""/>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <img src={image1} alt=""/>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <img src={image2} alt=""/>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <img src={image1} alt=""/>
        </StyledSwiperSlide>
      </StyledSwiper>
  );
};

export default FeedContent;

const StyledSwiper = styled(Swiper)`
  border-radius: 20px;
  &.swiper-autoheight {
    height: 100%;
  }
`

const StyledSwiperSlide = styled(SwiperSlide)`
  overflow: hidden;
  border-radius: 20px;
`
