import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import "../styles/globals.css";
import Layout from "/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Container>
        <Layout />
        <Component {...pageProps} />
      </Container>
    </AnimatePresence>
  );
}
const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;

export default MyApp;
