import Image from "next/image";
import React from "react";
import styled from "styled-components";

import LaunchVehiclePortrait from "/public/technology/image-launch-vehicle-portrait.jpg";
import LaunchVehicleLandscape from "/public/technology/image-launch-vehicle-landscape.jpg";
import SpaceportPortrait from "/public/technology/image-spaceport-portrait.jpg";
import SpaceportLandscape from "/public/technology/image-spaceport-landscape.jpg";
import SpaceCapsulePortrait from "/public/technology/image-space-capsule-portrait.jpg";
import SpaceCapsuleLandscape from "/public/technology/image-space-capsule-landscape.jpg";

const TechnologyCard = ({ item, innerWidth }) => {
  return (
    <FlexContainer>
      <div className="text-content">
        <p>THE TERMINOLOGY…</p>
        <h1 className="name">{item.name}</h1>
        <p className="description">{item.description}</p>
      </div>
      <div className="img-container">
        {innerWidth > 992 ? (
          <Image
            src={
              item.name === "Launch vehicle"
                ? LaunchVehiclePortrait
                : item.name === "Spaceport"
                ? SpaceportPortrait
                : SpaceCapsulePortrait
            }
            width="350"
            objectFit="contain"
            objectPosition="center"
          />
        ) : (
          <Image
            src={
              item.name === "Launch vehicle"
                ? LaunchVehicleLandscape
                : item.name === "Spaceport"
                ? SpaceportLandscape
                : SpaceCapsuleLandscape
            }
            // width="350"
            // layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        )}
      </div>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  @media screen and (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 10em;
  }
  @media screen and (max-width: 640px) {
    gap: 8em;
  }
  > .text-content {
    flex: 3;
    padding-left: 9em;
    @media screen and (max-width: 992px) {
      padding: 0 1em;
      text-align: center;
    }
    > p:nth-child(1) {
      color: #d0d6f9;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 2.7px;
      line-height: 19px;
      font-family: "Barlow Condensed", sans-serif;
    }
    .name {
      color: #ffffff;
      font-size: 56px;
      font-weight: 400;
      line-height: 64px;
      text-transform: uppercase;
      font-family: "Bellefair", sans-serif;
      margin: 0.2em 0;
      @media screen and (max-width: 992px) {
        font-size: 40px;
        line-height: 46px;
      }
      @media screen and (max-width: 640px) {
        font-size: 24px;
        line-height: 28px;
      }
    }
    .description {
      color: #d0d6f9;
      font-size: 18px;
      font-weight: 400;
      line-height: 32px;
      font-family: "Barlow", sans-serif;
      padding-right: 2.6em;
      @media screen and (max-width: 992px) {
        padding: 0;
        font-size: 16px;
        line-height: 28px;
        max-width: 28em;
        margin: 0 auto;
      }
      @media screen and (max-width: 640px) {
        max-width: 30em;
        font-size: 15px;
        line-height: 25px;
      }
    }
  }
  > .img-container {
    flex: 2;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    @media screen and (max-width: 992px) {
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default TechnologyCard;
