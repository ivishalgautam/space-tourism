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
        <Swiper
          modules={[Pagination]}
          //   slidesPerView={1}
          //   navigation
          pagination={pagination}
          scrollbar={{ draggable: true }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.name}>
              <TechnologyCard item={item} />
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
  align-items: center;
  justify-content: center;
`;
const Technologies = styled.div`
  position: relative;
  min-width: 80%;
  width: 80%;
  height: 100%;
  margin-top: 25%;
`;

export default Technology;
