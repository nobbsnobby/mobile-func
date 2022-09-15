import React from 'react';
import styled from "styled-components";
import {Routes, Route} from "react-router-dom";
import FeedTabBar from "./versions/FeedTabBar";

const TabBar = () => {
  return (
      <Wrapper>
        <Routes>
          <Route  path='/*' element={<FeedTabBar/>}/>
          {/*<Route  path='/video/*' element={<FeedTabBar/>}/>*/}
        </Routes>
      </Wrapper>
  );
};

export default TabBar;

const Wrapper = styled.div`
  background-color: rgba(255,0,0,0.3);
  padding-left: 22px;
  padding-right: 22px;
`;
