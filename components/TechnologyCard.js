import Image from "next/image";
import React from "react";
import styled from "styled-components";

import LaunchVehiclePortrait from "/public/technology/image-launch-vehicle-portrait.jpg";
import LaunchVehicleLandscape from "/public/technology/image-launch-vehicle-landscape.jpg";
import SpaceportPortrait from "/public/technology/image-spaceport-portrait.jpg";
import SpaceportPortraitLandscape from "/public/technology/image-spaceport-landscape.jpg";
import SpaceCapsulePortrait from "/public/technology/image-space-capsule-portrait.jpg";
import SpaceCapsuleLandscape from "/public/technology/image-space-capsule-landscape.jpg";

const TechnologyCard = ({ item }) => {
  return (
    <FlexContainer>
      <div className="text-content">
        <p>THE TERMINOLOGY…</p>
        <h1 className="name">{item.name}</h1>
        <p className="description">{item.description}</p>
      </div>
      <div className="img-container">
        <Image
          src={
            item.name === "Launch vehicle"
              ? LaunchVehiclePortrait
              : item.name === "Spaceport"
              ? SpaceportPortrait
              : SpaceCapsulePortrait
          }
          width={innerWidth > 990 ? 568 : innerWidth > 700 ? 456 : 177}
          height={innerWidth > 990 ? 712 : innerWidth > 700 ? 572 : 222}
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TechnologyCard;
