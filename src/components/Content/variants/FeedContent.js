import React, { createContext, useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import axios from "axios";
import FeedContentItem from "./FeedContentItem";
import {useDrag, useMove} from "@use-gesture/react";
import {useNavigate} from "react-router-dom";

export const FeedPlayerContext = createContext({
  isMuted: true,
  setMutedState: () => {},
});
const FeedPlayerContextProvider = FeedPlayerContext.Provider;

const FeedContent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isMuted, setMutedState] = useState(true);
  const feedPlayerContextValue = useMemo(
    () => ({
      isMuted,
      setMutedState,
    }),
    [isMuted]
  );

  useEffect(() => {
    const req = async () => {
      const { data } = await axios.get("http://localhost:3005/feedItems?_page=1&_limit=3");
      setData(data);
    };
    req();
  }, []);

  const lastSlideAction = async () => {
      const { data } = await axios.get("http://localhost:3005/feedItems?_page=1&_limit=3");
      setData(prevState => ([...prevState, ...data]));
  }

  const bind = useDrag((state) => {
    if(state.elapsedTime < 200) {
      if(state.direction[0] === 1 && state.distance[0] > 200) {
        navigate(-1)
      }
      if(state.direction[0] === -1 && state.distance[0] > 200) {
        navigate('/profile')
      }
    }
  }, {axis: 'x'})

  return (
    <FeedPlayerContextProvider value={feedPlayerContextValue}>
      {/*because slider fired end action with empty array*/}
      <GestureElemet {...bind()}>
      {data.length && <StyledSwiper
        direction="vertical"
        autoHeight={true}
        onSlideChange={() => console.log("slide change")}
        onReachEnd={lastSlideAction}
      >
        {data.map((i, index) => (
          <StyledSwiperSlide key={index}>
            <FeedContentItem {...i} />
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>}
      </GestureElemet>
    </FeedPlayerContextProvider>
  );
};

export default FeedContent;

const StyledSwiper = styled(Swiper)`
  border-radius: 20px;
  &.swiper-autoheight {
    height: 100%;
  }
`;

const GestureElemet = styled.div`
height: 100%;
  touch-action: none;
`

const StyledSwiperSlide = styled(SwiperSlide)`
  overflow: hidden;
  border-radius: 20px;
`;
