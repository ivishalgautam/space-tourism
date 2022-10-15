import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import bgDesktop from "/public/crew/background-crew-desktop.jpg";
import bgTablet from "/public/crew/background-crew-tablet.jpg";
import bgMobile from "/public/crew/background-crew-mobile.jpg";
import CrewComp from "../components/CrewComp";

const data = [
  {
    name: "Douglas Hurley",
    images: {
      png: "./assets/crew/image-douglas-hurley.png",
      webp: "./assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "./assets/crew/image-mark-shuttleworth.png",
      webp: "./assets/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "./assets/crew/image-victor-glover.png",
      webp: "./assets/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "./assets/crew/image-anousheh-ansari.png",
      webp: "./assets/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const Crew = () => {
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
    <Container>
      {innerWidth > 870 ? (
        <Image
          src={bgDesktop}
          layout="fill"
          alt="home desktop"
          objectFit="cover"
          objectPosition="center"
        />
      ) : innerWidth <= 870 ? (
        <Image
          src={bgTablet}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="home tablet"
        />
      ) : (
        <Image
          src={bgMobile}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="home mobile"
        />
      )}
      <CrewContainer>
        <h1 className="section-heading">
          <span>02</span>Meet your crew
        </h1>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {data.map((crew) => {
            return (
              <SwiperSlide key={crew.name}>
                <CrewComp crew={crew} innerWidth={innerWidth} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CrewContainer>
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0 10em; */
`;
const CrewContainer = styled.div`
  position: relative;
  min-width: 80%;
  width: 80%;
  height: 100%;
  margin-top: 25%;
  @media screen and (max-width: 990px) {
    width: 90%;
    margin-top: 35%;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    margin-top: 40%;
  }

  .section-heading {
    span {
      font-weight: 700;
      margin-right: 0.5em;
      opacity: 0.25;
    }
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    font-weight: 400;
    font-family: "Barlow Condensed", sans-serif;
    @media screen and (max-width: 990px) {
      font-size: 20px;
      line-height: 24px;
    }
    @media screen and (max-width: 700px) {
      text-align: center;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

export default Crew;
