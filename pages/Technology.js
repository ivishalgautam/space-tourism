import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import TechnologyCard from "../components/TechnologyCard";
import bgDesktop from "/public/technology/background-technology-desktop.jpg";
import bgTablet from "/public/technology/background-technology-tablet.jpg";
import bgMobile from "/public/technology/background-technology-mobile.jpg";
import Image from "next/image";

const data = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "./assets/technology/image-spaceport-portrait.jpg",
      landscape: "./assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "./assets/technology/image-space-capsule-portrait.jpg",
      landscape: "./assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const Technology = () => {
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

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
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

      <Technologies>
        <h1 className="section-heading">
          <span>03</span>Space launch 101
        </h1>
        <Swiper modules={[Pagination]} pagination={pagination}>
          {data.map((item) => (
            <SwiperSlide key={item.name}>
              <TechnologyCard item={item} innerWidth={innerWidth} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Technologies>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
const Technologies = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  top: 20%;
  @media screen and (max-width: 992px) {
    width: 100%;
    top: 9%;
  }
  .section-heading {
    line-height: 34px;
    font-size: 28px;
    font-weight: 400;
    color: #ffffff;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    font-family: "Barlow Condensed", sans-serif;
    @media screen and (max-width: 992px) {
      line-height: 24px;
      font-size: 20px;
      margin-bottom: 2em;
      padding-left: 2em;
    }
    @media screen and (max-width: 992px) {
      font-size: 16px;
    }
    span {
      font-weight: 700;
      opacity: 0.25;
      margin-right: 0.5em;
    }
  }
  .swiper-pagination {
    height: 80%;
    width: 8% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    @media screen and (max-width: 992px) {
      flex-direction: row;
      position: absolute;
      top: 52% !important;
      gap: 1em;
      height: 10%;
      width: 100% !important;
    }
    @media screen and (max-width: 640px) {
      top: 49% !important;
      gap: 0.5em;
    }
    @media screen and (max-width: 400px) {
      top: 40% !important;
    }
    @media screen and (max-width: 356px) {
      top: 36% !important;
    }
    > span {
      color: #ffffff !important;
      opacity: 1 !important;
      background: transparent !important;
      padding: 1em;
      font-size: 32px;
      line-height: 37px;
      font-weight: 400;
      font-family: "Bellefair", sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid hsla(0, 100%, 100%, 0.25);
      @media screen and (max-width: 992px) {
        padding: 1em;
        font-size: 24px;
      }
    }
    .swiper-pagination-bullet-active {
      background: #ffffff !important;
      color: #0b0d17 !important;
    }
  }
`;

export default Technology;
