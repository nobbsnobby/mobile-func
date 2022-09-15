import React, {useContext} from "react";
import styled from "styled-components";
import { ModalContext } from "../../App";
import ModalContent from "./ModalContent";
import {animated, useTransition} from "react-spring";

const Index = ( ) => {
  const { isOpen, setOpenStatus } = useContext(ModalContext);

  const transitions = useTransition(isOpen, {
    from: { transform: 'translateY(100%)', opacity: 0 },
    enter: { transform: 'translateY(0%)', opacity: 0.8 },
    leave: { transform: 'translateY(100%)', opacity: 0 },
  });

  return transitions(({ transform, opacity }, item) => {
    return (
        item && (
            <Wrapper>
              <AnimatedWrapper style={{transform}}>
                <ModalContent/>
              </AnimatedWrapper>
              <Bg
                  style={{ opacity }}
                  onClick={() => {
                    console.log('bg')
                    setOpenStatus(false);
                  }} />
            </Wrapper>
        )
    );
  });
};

export default Index;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1001;
`;

const AnimatedWrapper = styled(animated.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70vh;
  z-index: 2;
`

const Bg = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  opacity: 0;
`;
