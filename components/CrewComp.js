import React from "react";
import Douglas from "/public/crew/image-douglas-hurley.webp";
import Mark from "/public/crew/image-mark-shuttleworth.webp";
import Victor from "/public/crew/image-victor-glover.webp";
import Anousheh from "/public/crew/image-anousheh-ansari.webp";
import styled from "styled-components";
import Image from "next/image";

import "swiper/css";

const CrewComp = ({ crew }) => {
  return (
    <>
      <FlexContainer key={crew.name}>
        <div className="text-content">
          <h2 className="role">{crew.role}</h2>
          <h1 className="name">{crew.name}</h1>
          <p className="bio">{crew.bio}</p>
        </div>
        <div className="crew-img">
          <div className="img-container" style={{ position: "relative" }}>
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
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>
      </FlexContainer>
    </>
  );
};
const FlexContainer = styled.div``;

export default CrewComp;
