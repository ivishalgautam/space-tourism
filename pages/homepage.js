import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import homeBgDesktop from "/public/home/background-home-desktop.jpg";
import homeBgTablet from "/public/home/background-home-tablet.jpg";
import homeBgMobile from "/public/home/background-home-mobile.jpg";

const Homepage = () => {
  const [innerWidth, setInnerWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : ""
  );

  function getInnerWidth() {
    setInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", getInnerWidth);

    return () => {
      window.removeEventListener("resize", getInnerWidth);
    };
  }, []);

  return (
    <>
      <Container>
        {innerWidth > 870 ? (
          <Image
            src={homeBgDesktop}
            layout="fill"
            alt="home desktop"
            objectFit="cover"
            objectPosition={"center"}
          />
        ) : innerWidth <= 870 ? (
          <Image
            src={homeBgTablet}
            layout="fill"
            alt="home tablet"
            objectFit="cover"
            objectPosition={"center"}
          />
        ) : (
          <Image
            src={homeBgMobile}
            layout="fill"
            alt="home mobile"
            objectFit="cover"
            objectPosition={"center"}
          />
        )}
        <Section>
          <div className="text-content">
            <p className="para1">So, you want to travel to</p>
            <h1>Space</h1>
            <p className="para2">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="explore">
            <div>Explore</div>
          </div>
        </Section>
      </Container>
    </>
  );
};
const Container = styled.div`
  /* position: relative; */
  background-position: center;
  background-size: cover;
  max-width: 90%;
  width: 100%;
  height: 100%;
  font-family: "Barlow", sans-serif;
`;

const Section = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10em;
  @media screen and (max-width: 870px) {
    flex-direction: column;
    top: 20%;
    gap: 5em;
    padding: 0 3em;
  }
  @media screen and (max-width: 495px) {
    top: 20%;
    padding: 0 1em;
  }

  .text-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media screen and (max-width: 870px) {
      align-items: center;
      justify-content: center;
      > * {
        text-align: center;
      }
    }

    > p {
      color: #d0d6f9;
    }

    .para1 {
      font-size: calc(2rem - 4px);
      font-family: "Barlow Condensed", sans-serif;
      letter-spacing: 4.725px;
      line-height: 34px;
      text-transform: uppercase;
      @media screen and (max-width: 510px) {
        margin: 0;
        font-size: 1rem;
      }
    }
    h1 {
      font-size: 9.375rem;
      font-family: "Bellefair", sans-serif;
      line-height: 10.75rem;
      text-transform: uppercase;
      margin: 0;
      @media screen and (max-width: 510px) {
        font-size: 5rem;
      }
    }
    .para2 {
      font-size: calc(1rem + 2px);
      line-height: 2rem;
      @media screen and (max-width: 870px) {
        font-size: 1rem;
      }
      @media screen and (max-width: 510px) {
        font-size: calc(1rem - 1px);
        margin: 0;
      }
    }
  }
  > .explore {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: auto;
    margin-bottom: 4em;
    margin-left: 1em;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0b0d17;
      font-size: 2rem;
      font-family: "Bellefair", sans-serif;
      width: 6em;
      height: 6em;
      background-color: #ffffff;
      border-radius: 50%;
    }
  }
`;

export default Homepage;
