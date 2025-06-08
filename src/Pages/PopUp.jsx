import React from "react";
import Popup from "reactjs-popup";
import Popup1Bg from "../assets/PopupBg1.svg";
import XButton from "../assets/button-x.svg"
import { IframeWrapper, PupUpMain, VideName } from "../Styles/Popup";

const PopUpCompOne = () => (
  <Popup
    trigger={
      <div >
        <img src={Popup1Bg} alt="" />
      </div>
    }
    modal
    nested
  >
    {(close) => (
      <PupUpMain>
        <VideName>
            <div > Luxery Caravan </div>
            <img src={XButton} alt="" onClick={close} />
        </VideName>
          <IframeWrapper
            src="https://www.youtube.com/embed/WwPyPlX0hJA?si=kxjjhN4GYrywWsOm"
            title="YouTube video player"
            frameborder="0"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></IframeWrapper>
      </PupUpMain>
    )}
  </Popup>
);

export default PopUpCompOne;
