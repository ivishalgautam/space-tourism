import React from "react";
import Douglas from "/public/crew/image-douglas-hurley.webp";
import Mark from "/public/crew/image-mark-shuttleworth.webp";
import Victor from "/public/crew/image-victor-glover.webp";
import Anousheh from "/public/crew/image-anousheh-ansari.webp";
import styled from "styled-components";
import Image from "next/image";

import "swiper/css";

const CrewComp = ({ crew, innerWidth }) => {
  return (
    <>
      <FlexContainer key={crew.name}>
        <div className="text-content">
          <h2 className="role">{crew.role}</h2>
          <h1 className="name">{crew.name}</h1>
          <p className="bio">{crew.bio}</p>
        </div>
        <div className="crew-img">
          <Image
            src={
              crew.name === "Douglas Hurley"
                ? Douglas
                : crew.name === "Mark Shuttleworth"
                ? Mark
                : crew.name === "Victor Glover"
                ? Victor
                : Anousheh
            }
            width={innerWidth > 990 ? 568 : innerWidth > 700 ? 456 : 177}
            height={innerWidth > 990 ? 712 : innerWidth > 700 ? 572 : 222}
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </FlexContainer>
    </>
  );
};
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 990px) {
    flex-direction: column;
    margin-top: 2em;
    gap: 5em;
    > * {
      text-align: center;
    }
  }
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    margin-top: 2.5em;
    gap: 4em;
  }
  > * {
    flex: 1;
  }

  .text-content {
    flex: 2;
    @media screen and (max-width: 900px) {
    }
    .role {
      margin: 0;
      font-size: 32px;
      line-height: 37px;
      font-weight: 400;
      opacity: 0.5;
      text-transform: uppercase;
      font-family: "Bellefair", sans-serif;
      @media screen and (max-width: 990px) {
        font-size: 24px;
        line-height: 28px;
      }
      @media screen and (max-width: 700px) {
        font-size: 16px;
        line-height: 18px;
      }
    }
    .name {
      font-size: 56px;
      line-height: 64px;
      font-weight: 400;
      text-transform: uppercase;
      font-family: "Bellefair", sans-serif;
      margin-top: 0.2em;
      @media screen and (max-width: 990px) {
        font-size: 40px;
        line-height: 46px;
      }
      @media screen and (max-width: 700px) {
        font-size: 24px;
        line-height: 28px;
      }
    }
    .bio {
      color: #d0d6f9;
      font-size: 18px;
      font-weight: 400;
      line-height: 32px;
      font-weight: 400;
      font-family: "Barlow", sans-serif;
      margin-top: 1em;
      padding-right: 9em;
      @media screen and (max-width: 990px) {
        padding: 0;
        font-size: 16px;
        line-height: 28px;
      }
      @media screen and (max-width: 700px) {
        font-size: 15px;
        line-height: 25px;
      }
    }
  }
  .crew-img {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    @media screen and (max-width: 700px) {
      border-bottom: 1px solid #383b4b;
    }
  }
`;

export default CrewComp;
