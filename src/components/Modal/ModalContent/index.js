import React  from "react";
import styled from "styled-components";

const ModalContent = () => {
  return (
    <Wrapper>
      <Chat></Chat>
      <MessageWrapper>
        <input type="text"/>
      </MessageWrapper>
    </Wrapper>
  );
};

export default ModalContent;

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 40px;
`;

const Chat = styled.div`

`

const MessageWrapper = styled.div`
  background-color: black;
 input {
   width: 100%;
   height: 40px;
   color: white;
   background-color: black;
   outline: none;
 }
`
