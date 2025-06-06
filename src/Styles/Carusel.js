import styled from "styled-components";
import BackOne from '../assets/backgroundOne.svg'
import BackTwo from '../assets/backgroundTwo.svg'
import BackThree from '../assets/BackgroundThree.svg'

export const BgDivsOne = styled.div`
height: 500px;
width: 100%;
background-image: url("${BackOne}");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`
export const BgDivsTwo = styled.div`
height: 500px;
width: 100%;
background-image: url("${BackTwo}");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`
export const BgDivsThree = styled.div`
height: 500px;
width: 100%;
background-image: url("${BackThree}");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`