import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import bgDesktop from "/public/destination/background-destination-desktop.jpg";
import bgTablet from "/public/destination/background-destination-tablet.jpg";
import bgMobile from "/public/destination/background-destination-mobile.jpg";
import Moon from "/public/destination/image-moon.webp";
import Mars from "/public/destination/image-mars.webp";
import Europa from "/public/destination/image-europa.webp";
import Titan from "/public/destination/image-titan.webp";
import { motion } from "framer-motion";

const data = [
  {
    name: "Moon",
    images: {
      png: "/public/destination/image-moon.png",
      webp: "/public/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "/public/destination/image-mars.png",
      webp: "/public/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "/public/destination/image-europa.png",
      webp: "/public/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "/public/destination/image-titan.png",
      webp: "/public/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const Details = () => {
  const [innerWidth, setInnerWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : ""
  );
  const router = useRouter();
  const { id } = router.query;

  function getInnerWidth() {
    setInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", getInnerWidth);

    return () => {
      window.removeEventListener("resize", getInnerWidth);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  };

  return (
    <>
      {data
        .filter((elem) => {
          return elem.name === id;
        })
        .map((item) => (
          <Container
            key={item.name}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear" }}
          >
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

            <Section>
              <h1>
                <span>01</span> Pick your destination
              </h1>
              <div className="content">
                <motion.div
                  className="destinationBg"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={
                      id === "Moon"
                        ? Moon
                        : id === "Mars"
                        ? Mars
                        : id === "Titan"
                        ? Titan
                        : Europa
                    }
                    width={
                      innerWidth > 870 ? 350 : innerWidth > 495 ? 300 : 170
                    }
                    height={
                      innerWidth > 870 ? 350 : innerWidth > 495 ? 300 : 170
                    }
                    objectFit="contain"
                    alt="destination"
                  />
                </motion.div>
                <div className="text-content">
                  <nav>
                    <ul>
                      <li className={id === "Moon" ? "active" : ""}>
                        <Link href="/destination/Moon">
                          <a>Moon</a>
                        </Link>
                      </li>
                      <li className={id === "Mars" ? "active" : ""}>
                        <Link href="/destination/Mars">
                          <a>Mars</a>
                        </Link>
                      </li>
                      <li className={id === "Europa" ? "active" : ""}>
                        <Link href="/destination/Europa">
                          <a>Europa</a>
                        </Link>
                      </li>
                      <li className={id === "Titan" ? "active" : ""}>
                        <Link href="/destination/Titan">
                          <a>Titan</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  <div className="main">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                  </div>

                  <div className="distance-time">
                    <div className="distance">
                      <p>AVG. DISTANCE</p>
                      <h1>{item.distance}</h1>
                    </div>
                    <div className="time">
                      <p>Est. travel time</p>
                      <h1>{item.travel}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </Container>
        ))}
    </>
  );
};

const Container = styled(motion.div)`
  max-width: 100%;
  min-height: 110vh;
  font-family: "Barlow", sans-serif;
  overflow: hidden;
  @media screen and (max-width: 870px) {
    min-height: 141vh;
  }
  @media screen and (max-width: 495px) {
    min-height: 125vh;
  }
`;
const Section = styled.div`
  position: absolute;
  top: 18%;
  left: 0;
  width: 100vw;
  min-height: 82%;
  display: flex;
  flex-direction: column;
  padding: 0 2em;

  @media screen and (max-width: 800px) {
    top: 14%;
  }
  @media screen and (max-width: 870px) {
    top: 13%;
  }
  @media screen and (max-width: 495px) {
    top: 6%;
    padding: 1em;
  }

  > h1 {
    font-size: calc(2rem - 4px);
    font-weight: 400;
    font-family: "Barlow Condensed", sans-serif;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    margin-bottom: 1em;
    > span {
      margin-right: 0.5em;
      font-weight: 700;
      opacity: 0.25;
    }
    @media screen and (max-width: 800px) {
      font-size: calc(1rem + 4px);
    }
    @media screen and (max-width: 495px) {
      text-align: center;
      font-size: 1rem;
      margin-bottom: 1.5em;
      line-height: 19.2px;
    }
  }

  > .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > * {
      flex: 1;
    }
    @media screen and (max-width: 870px) {
      flex-direction: column;
      top: 20%;
      gap: 1em;
      padding: 0 3em;
    }
    @media screen and (max-width: 495px) {
      top: 10%;
      padding: 0 0.5em;
    }
    > .destinationBg {
      position: relative;
      height: 100%;
      margin-right: 2em;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 870px) {
        margin: 0;
      }
    }
    > .text-content {
      display: flex;
      flex-direction: column;
      align-items: space-between;
      justify-content: center;
      @media screen and (max-width: 800px) {
        > * {
          text-align: center;
        }
      }
      nav ul {
        list-style: none;
        display: flex;
        align-items: center;
        padding-left: 0;
        gap: 1em;
        @media screen and (max-width: 800px) {
          justify-content: center;
        }

        > li {
          padding-bottom: 0.5em;
          &.active {
            border-bottom: 2px solid #ffffff;
          }
          a {
            text-decoration: none;
            text-transform: uppercase;
            font-size: 1rem;
            font-family: "Barlow Condensed", sans-serif;
            letter-spacing: 2.7px;
            color: #d0d6f9;
            @media screen and (max-width: 495px) {
              font-size: calc(1rem - 2px);
            }
          }
        }
      }
      .main {
        border-bottom: 1px solid #383b4b;
        h1 {
          font-size: 6.25rem;
          margin: 0;
          font-family: "Bellefair", sans-serif;
          text-transform: uppercase;
          @media screen and (max-width: 870px) {
            font-size: 5rem;
          }
          @media screen and (max-width: 495px) {
            font-size: 3.5rem;
          }
        }
        p {
          font-size: calc(1rem + 2px);
          line-height: 2rem;
          color: #d0d6f9;
          @media screen and (max-width: 870px) {
            font-size: 1rem;
            line-height: calc(2rem - 4px);
          }
          @media screen and (max-width: 495px) {
            font-size: calc(1rem - 1px);
            line-height: calc(2rem - 7px);
            padding-bottom: 1em;
          }
        }
      }
      .distance-time {
        display: flex;
        align-items: center;
        gap: 4em;
        margin-top: 1em;
        @media screen and (max-width: 870px) {
          justify-content: space-around;
          gap: 0;
        }
        @media screen and (max-width: 495px) {
          flex-direction: column;
        }

        > .distance,
        > .time {
          p {
            font-size: calc(1rem - 2px);
            color: #d0d6f9;
            text-transform: uppercase;
            letter-spacing: 2.36px;

            @media screen and (max-width: 870px) {
              line-height: 2.36px;
            }
            @media screen and (max-width: 495px) {
              line-height: 16.8px;
            }
          }
          h1 {
            font-family: "Bellefair", sans-serif;
            text-transform: uppercase;
            font-size: calc(2rem - 4px);
            line-height: 2rem;
            font-weight: 400;
            @media screen and (max-width: 870px) {
              font-size: calc(2rem - 4px);
            }
          }
        }
      }
    }
  }
`;

export default Details;
