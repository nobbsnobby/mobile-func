import HelmetBase from "./components/HelmetBase/HelmetBase";
import Content from "./components/Content/Content";
import {useState, useEffect, createContext, useMemo} from "react";
import Modal from "./components/Modal";
import styled, { createGlobalStyle } from "styled-components";
import ModalContent from "./components/Modal/ModalContent";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import NavBar from "./components/TabBar";

// fix zoom
const GlobalStyle = createGlobalStyle`
  body {
    touch-action: pan-y pan-x;
    overflow: hidden;
    height: 100vh;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    overscroll-behavior: contain;
    color: white;
  }

  #root {
    height: 100%;
  }
  
  // additional fix for apple devices
  @supports (-webkit-touch-callout: none) {
    body, #root {
      min-height: -webkit-fill-available;
    }
  }
`;

export const ModalContext = createContext({
  isOpen: false,
  setOpenStatus: () => {}
});
const ModalContextProvider = ModalContext.Provider

function App() {

  const [isOpen, setOpenStatus] = useState(false)
  const themeModalContext = useMemo(
      () => ({
        isOpen,
        setOpenStatus
      }),
      [isOpen],
  );

  return (
    <>
      <HelmetBase />
      <GlobalStyle />
      <ModalContextProvider value={themeModalContext}>
        <BaseLayout>
          <Content />
          <NavBar />
        </BaseLayout>
        <Modal />
      </ModalContextProvider>
    </>
  );
}

export default App;
