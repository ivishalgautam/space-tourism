import styled from "styled-components";
import "../styles/globals.css";
import Layout from "/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Layout />
      <Component {...pageProps} />
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  /* background-color: blueviolet; */
`;

export default MyApp;
