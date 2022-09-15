import React from 'react';
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import FeedContent from "./variants/FeedContent";
import LiveContent from "./variants/LiveContent";

const Content = () => {

  return (
      <Wrapper>
        <Routes>
          <Route path='/' element={<FeedContent/>}/>
          <Route path='/live-now' element={<LiveContent/>}/>
        </Routes>
      </Wrapper>
  )
};

export default Content;


const Wrapper = styled.div`
  background-color: black;
  border-radius: 20px;
  overflow: hidden;
`
