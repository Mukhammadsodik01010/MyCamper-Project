import React from "react";
import LogoImg from "../assets/Camper.svg";
import DownArrow from "../assets/down-arrow.svg";
import CartImg from "../assets/cart.svg";
import UserImg from "../assets/user.svg";
import BurgerImg from "../assets/burgerButton.svg";
import {
  HiddenImg,
  LeftBurgerButton,
  NavbarMain,
  NavLeft,
  NavMid,
  NavMidComp,
  NavRight,
  NavRightEng,
  RightBurgerImg,
} from "../Styles/Navbar";

const Navbarcomponent = () => {
  return (
    <>
      <NavbarMain>
        <NavLeft>
          <LeftBurgerButton src={BurgerImg} alt="" />
          <img src={LogoImg} alt="Logo" />
        </NavLeft>
        <NavMid>
          <NavMidComp>
            <p>Motor</p>
            <img src={DownArrow} alt="" />
          </NavMidComp>
          <NavMidComp>
            <p>Caravan</p>
            <img src={DownArrow} alt="" />
          </NavMidComp>
          <NavMidComp>
            <p>Tuning</p>
            <img src={DownArrow} alt="" />
          </NavMidComp>
          <NavMidComp>
            <p>Used Car</p>
            <img src={DownArrow} alt="" />
          </NavMidComp>
          <NavMidComp>
            <p>Camping place</p>
          </NavMidComp>
        </NavMid>
        <NavRight>
          <img src={CartImg} alt="" />
          <HiddenImg src={UserImg} alt="" />
          <NavRightEng>
            <p>Eng</p>
            <img src={DownArrow} alt="" />
          </NavRightEng>
          <RightBurgerImg src={BurgerImg} alt="" />
        </NavRight>
      </NavbarMain>
    </>
  );
};
export default Navbarcomponent;
