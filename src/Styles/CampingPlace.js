import styled from "styled-components";
import CampingbgImage from '../assets/CampingBg.svg'
import Camping1Bg from '../assets/CampingPlace1.svg'
import Camping2Bg from '../assets/CampingPlace2.svg'
import Camping3Bg from '../assets/CampingPlace3.svg'

export const CampingBgDiv = styled.div`
width: 100%;
height: 450px;
background-image: url("${CampingbgImage}");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
`
export const CampingBgh3 =styled.h3`
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;
`
export const CampingBgh1 =styled.h1`
color: #FFF;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align: center;
margin-top: 40px;
`

export const CampingPlacesMain = styled.div`
display: grid;
grid-template-areas: "a a a";
gap: 20px;
row-gap: 50px;
justify-content: space-evenly;
padding: 80px 70px;
@media only screen and (max-width: 1370px) {
    grid-template-areas: "a a";
    justify-content: space-evenly;
}
@media only screen and (max-width: 980px) {
    grid-template-areas: "a";
    padding: 80px 40px;
}
@media only screen and (max-width: 600px) {
    padding: 80px 20px;
}
`
export const CampingChildBg1 = styled.div`
background-image: url("${Camping1Bg}");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 395px;
height: 300px;
flex-shrink: 0;
border-radius: 10px;
@media only screen and (max-width: 980px) {
   width: 350px;
}
`
export const CampingChildH1 = styled.h1`
color: var(--text, #373737);
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 15px;
`
export const CampingChildH2 = styled.h2`
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 5px;
`
export const CampingChildBg2 = styled.div`
background-image: url("${Camping2Bg}");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 395px;
height: 300px;
flex-shrink: 0;
border-radius: 10px;
@media only screen and (max-width: 980px) {
   width: 350px;
}
`
export const CampingChildBg3 = styled.div`
background-image: url("${Camping3Bg}");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 395px;
height: 300px;
flex-shrink: 0;
border-radius: 10px;
@media only screen and (max-width: 980px) {
   width: 350px;
}
`