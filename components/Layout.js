import React from "react";
import styled from "styled-components";
import Navbar from "/components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
