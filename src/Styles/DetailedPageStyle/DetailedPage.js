import styled from "styled-components";
import BgImg from "../../assets/BackgroundThree.svg";


export const DetailMainBg = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("${BgImg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  text-align: center;
  font-family: Montserrat;
  font-size: 60px;
  font-weight: 700;
`;

export const BasicTabsMainDiv = styled.div`
padding: 0 70px;
@media only screen and (max-width: 1000px) {
    padding: 0 30px;
}  
@media only screen and (max-width: 700px) {
    padding: 0 0px;
}    
`
