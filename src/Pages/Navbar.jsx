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
import { Link } from "react-router-dom";

const Navbarcomponent = () => {
  return (
    <>
      <NavbarMain>
        <NavLeft>
          <LeftBurgerButton src={BurgerImg} alt="" />
          <Link className="NavLink" to={'/'}>
            <img src={LogoImg} alt="Logo" />
          </Link>
        </NavLeft>
        <NavMid>
          <NavMidComp>
             <Link className="NavLink" to={'/motor'}>
               <p>Motor</p>
             </Link>
              <img src={DownArrow} alt="" />
          </NavMidComp>
          <NavMidComp>
            <Link className="NavLink" to={'/caravan'}>
              <p>Caravan</p>
            </Link>
            <img src={DownArrow} alt="" />
          </NavMidComp>
          <NavMidComp>
            <Link className="NavLink" to={'/tuning'}>
              <p>Tuning</p>
            </Link>
            <img src={DownArrow} alt="" />
          </NavMidComp>
          <NavMidComp>
            <Link className="NavLink" to={'/usedcar'}>
              <p>Used Car</p>
            </Link>
            <img src={DownArrow} alt="" />
          </NavMidComp>
          <NavMidComp>
            <Link className="NavLink" to={'/campingplace'}>
              <p>Camping place</p>
            </Link>
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
