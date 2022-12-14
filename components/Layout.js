import React from "react";
import styled from "styled-components";
import Navbar from "/components/Navbar";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export default Layout;
