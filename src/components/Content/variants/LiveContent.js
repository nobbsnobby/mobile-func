import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import image from './2.jpeg'

const LiveContent = () => {
  const ref= useRef(null);
  const refInput= useRef(null);

  useEffect(() => {
    const f = () => {
      ref.current.style.height = window.visualViewport.height + 'px';
      if(document.activeElement === refInput.current) {
        console.log('active')
        window.scrollTo(0,0)
      }
    }
    visualViewport.addEventListener('resize', f)

    return () => {
      visualViewport.removeEventListener('resize', f)
    }
  }, [])


  return (
      <Wrapper>
        <Video>
          <img src={image} alt=""/>
        </Video>
        <ElementsWrapper ref={ref}>
          <RightBar>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </RightBar>
          <MessageWrapper>
            <input type="text" ref={refInput}/>
          </MessageWrapper>
        </ElementsWrapper>
      </Wrapper>
  );
};

export default LiveContent;


const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const Video = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const ElementsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  
`



const RightBar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  right: 0;
  bottom: 100px;
  background-color: red;
  * {
    margin: 10px 0;
  }
`

const MessageWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
 input {
   width: 100%;
   height: 40px;
   color: white;
   background-color: black;
   outline: none;
 }
`
