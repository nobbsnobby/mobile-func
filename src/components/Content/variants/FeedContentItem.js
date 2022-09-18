import React, {useContext, useEffect, useMemo, useState} from 'react';
import ReactPlayer from 'react-player'
import {useSwiper, useSwiperSlide} from "swiper/react";
import styled from "styled-components";
import {FeedPlayerContext} from "./FeedContent";

const FeedContentItem = ({id, type, url}) => {
  //state
  const slideData = useSwiperSlide();
  const {isEnd, realIndex} = useSwiper();
  const [playing, setPlaying] = useState(false);
  const {isMuted, setMutedState} = useContext(FeedPlayerContext);

  useEffect(() => {
    slideData.isActive ? setPlaying(true): setPlaying(false)
  }, [slideData.isActive])


  const playOrPause = () => {
    console.log('click')
    setPlaying(!playing)
  }

  return (
      <Wrapper>
        <p>{id}</p>
        <ReactPlayer
            url={slideData.isActive ? url : null}
            controls={false}
            width="100%"
            height="100%"
            playing={playing}
            muted={isMuted}
            loop={true}
        />
        <PlayBtn onClick={playOrPause}>play</PlayBtn>
        <MutedBtn onClick={() => {setMutedState(!isMuted)}}>muted</MutedBtn>
      </Wrapper>
  );
};

export default FeedContentItem;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  p {
    position: absolute;
    left: 10px;
    top: 10px;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`

const PlayBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background-color: red;
  z-index: 2;
`

const MutedBtn = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background-color: green;
  z-index: 2;
`
