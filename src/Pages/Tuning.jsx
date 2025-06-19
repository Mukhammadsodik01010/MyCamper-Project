import React from "react";
import Navbarcomponent from "./Navbar";
import FooterComponent from "../Footer";
import {
  TuningBgDiv,
  TuningBgh1,
  TuningBgh2,
  TuningBgh3,
} from "../Styles/Tuning";
import TSectionComp from "./TSection";

const TuningComponent = () => {
  return (
    <>
      <Navbarcomponent />
      <TuningBgDiv>
        <TuningBgh3>Home / Tuning</TuningBgh3>
        <TuningBgh2>Our ranges</TuningBgh2>
        <TuningBgh1>Motors</TuningBgh1>
      </TuningBgDiv>
      <TSectionComp />
      <FooterComponent />
    </>
  );
};

export default TuningComponent;
