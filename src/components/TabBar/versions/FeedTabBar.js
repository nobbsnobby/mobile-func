import React, {useContext} from 'react';
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import {ModalContext} from "../../../App";

const FeedTabBar = () => {
  const { setOpenStatus } = useContext(ModalContext);

  return (
      <Wrapper>
        <StyledLink to='/live-now'>live</StyledLink>
        <StyledLink to='/'>feed</StyledLink>
        <Btn onClick={() => setOpenStatus(true)}>modal</Btn>
        <Btn>4</Btn>
        <StyledLink to='/profile'>2</StyledLink>
      </Wrapper>
  );
};

export default FeedTabBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const buttonsStyled = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: #fff;
    color: black;
    border-radius: 50%;
`

const Btn = styled.div`
 ${buttonsStyled}
`

const StyledLink = styled(Link)`
 ${buttonsStyled}
`
