import React from "react";
import styled from "styled-components";

const BaseLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default BaseLayout;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 4px 4px 4px;

  display: grid;
  grid-row-gap: 6px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 44px;
  flex-direction: column;

  background-color: #000;
`;
