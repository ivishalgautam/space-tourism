import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import bgDesktop from "/public/destination/background-destination-desktop.jpg";
import bgTablet from "/public/destination/background-destination-tablet.jpg";
import bgMobile from "/public/destination/background-destination-mobile.jpg";
import Moon from "/public/destination/image-moon.webp";
import Mars from "/public/destination/image-mars.webp";
import Europa from "/public/destination/image-europa.webp";
import Titan from "/public/destination/image-titan.webp";

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
  const router = useRouter();
  const { id } = router.query;

  const innerWidth = typeof window !== "undefined" ? window.innerWidth : "";

  return (
    <>
      {data
        .filter((elem) => {
          return elem.name === id;
        })
        .map((item) => (
          <Container>
            {innerWidth > 870 ? (
              <Image
                src={bgDesktop}
                layout="fill"
                height="100%"
                alt="home desktop"
                objectFit="cover"
                objectPosition="center"
              />
            ) : innerWidth <= 870 ? (
              <Image src={bgTablet} layout="fill" alt="home tablet" />
            ) : (
              <Image src={bgMobile} layout="fill" alt="home mobile" />
            )}
            <Section>
              <h1>
                <span>01</span> Pick your destination
              </h1>
              <div className="content">
                <div className="destinationBg">
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
                    width={350}
                    height={350}
                    objectFit="contain"
                  />
                </div>
                <div className="text-content">
                  <nav>
                    <ul>
                      <li className={id === "Moon" ? "active" : ""}>
                        <Link href="Moon">
                          <a>Moon</a>
                        </Link>
                      </li>
                      <li className={id === "Mars" ? "active" : ""}>
                        <Link href="Mars">
                          <a>Mars</a>
                        </Link>
                      </li>
                      <li className={id === "Europa" ? "active" : ""}>
                        <Link href="Europa">
                          <a>Europa</a>
                        </Link>
                      </li>
                      <li className={id === "Titan" ? "active" : ""}>
                        <Link href="Titan">
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

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* height: auto; */
  font-family: "Barlow", sans-serif;
`;
const Section = styled.div`
  position: absolute;
  top: 12%;
  left: 0;
  width: 100vw;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  padding: 0 2em;

  @media screen and (max-width: 800px) {
    top: 7%;
  }
  @media screen and (max-width: 495px) {
    padding: 1em;
  }

  > h1 {
    font-size: calc(2rem - 4px);
    font-weight: 400;
    font-family: "Barlow Condensed", sans-serif;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    margin-bottom: 2em;
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
      font-size: calc(1rem + 4px);
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

          &:hover {
            border-bottom: 1px solid #ffffff;
          }
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
          }
          @media screen and (max-width: 495px) {
            font-size: calc(1rem - 1px);
          }
        }
      }
      .distance-time {
        display: flex;
        align-items: center;
        gap: 4em;
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
            letter-spacing: 2.3625px;
            text-transform: uppercase;
          }
          h1 {
            font-family: "Bellefair", sans-serif;
            text-transform: uppercase;
            font-size: calc(2rem - 4px);
            line-height: 2rem;
            font-weight: 400;
          }
        }
      }
    }
  }
`;

export default Details;
