import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import logo from "/public/shared/logo.svg";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const router = useRouter();

  return (
    <>
      <Container>
        <div className="logo">
          <Link href="/">
            <Image src={logo} width={40} height={40} alt="space tourism" />
          </Link>
        </div>
        <nav className={`${active ? "active" : ""}`}>
          <ol className="nav-list">
            <li className={router.pathname === "/" ? "active" : ""}>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li
              className={
                router.pathname === "/destination/[id]" ? "active" : ""
              }
            >
              <Link href={"/destination/" + "Moon"}>
                <a>DESTINATION</a>
              </Link>
            </li>
            <li className={router.pathname === "/crew" ? "active" : ""}>
              <Link href="/Crew">
                <a>CREW</a>
              </Link>
            </li>
            <li className={router.pathname === "/technolodgy" ? "active" : ""}>
              <Link href="/technolodgy">
                <a>TECHNOLODGY</a>
              </Link>
            </li>
          </ol>
        </nav>
        <div className="burger">
          {!active ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              onClick={() => {
                setActive(!active);
              }}
            >
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              onClick={() => {
                setActive(!active);
              }}
            >
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          )}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 95%;
  height: 4.5em;
  position: absolute;
  top: 2.5em;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  margin-left: auto;

  @media screen and (max-width: 800px) {
    & {
      top: 0;
      right: 0;
    }
  }
  .logo {
    margin-right: 1em;
  }
  nav {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
    position: relative;
    min-width: 60%;
    height: 100%;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      max-width: 20em;
      height: 1px;
      background-color: rgba(151, 151, 151, 1);
    }
    @media screen and (max-width: 495px) {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      width: 70vw;
      height: 100vh;
    }

    .nav-list {
      height: 100%;
      list-style-type: none;
      counter-reset: li -1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2em;
      margin: 0 8em 0 4em;
      @media screen and (max-width: 900px) {
        & {
          margin: 0 4em 0 2em;
          gap: 1.5em;
        }
      }
      @media screen and (max-width: 800px) {
        & {
          margin: 0 1em 0 0;
          gap: 1em;
        }
      }
      @media screen and (max-width: 495px) {
        & {
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin-top: 7em;
          margin-left: 1.8em;
          padding: 0;
        }
      }
    }

    li {
      height: 100%;
      padding: 1.5em 0;
      &.active {
        border-bottom: 2px solid #fff;
        @media screen and (max-width: 495px) {
          & {
            border: none;
          }
        }
      }
      @media screen and (max-width: 495px) {
        & {
          height: auto;
          padding: 0;
          margin-bottom: 0.8em;
          border: none;
        }
      }

      &:before {
        counter-increment: li;
        content: counter(li, decimal-leading-zero);
        margin-right: 10px;
        font-weight: 700;
        color: #ffffff;
        font-family: "Barlow Condensed", sans-serif;
        letter-spacing: 2.7px;

        @media screen and (max-width: 800px) {
          & {
            content: "";
            margin: 0;
          }
        }
        @media screen and (max-width: 495px) {
          & {
            content: counter(li, decimal-leading-zero);
            margin-right: 10px;
          }
        }
      }
      a {
        font-size: 1rem;
        line-height: 19px;
        letter-spacing: 2.7px;
        color: #d0d6f9;
        font-family: "Barlow Condensed", sans-serif;

        @media screen and (max-width: 495px) {
          & {
            font-size: 1rem;
            line-height: 19px;
            letter-spacing: 2.7px;
          }
        }
      }
    }
  }
  .burger {
    z-index: 10000;
    display: none;
    margin-right: 1.4em;
    cursor: pointer;
    @media screen and (max-width: 495px) {
      & {
        display: block;
      }
    }
  }
  .active {
    display: block;
  }
`;

export default Navbar;
