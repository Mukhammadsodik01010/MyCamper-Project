import styled from "styled-components";
import BgImg from "../../assets/BackgroundThree.svg";
import ComfortBg1 from '../../assets/image-6.svg'
import ComfortBg2 from '../../assets/image-7.svg'
import ComfortBg3 from '../../assets/image-8.svg'
import ComfortBg4 from '../../assets/image-9.svg'
import ComfortBg5 from '../../assets/image-10.svg'


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
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
