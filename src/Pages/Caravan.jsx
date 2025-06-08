import React from 'react'
import Navbarcomponent from './Navbar'
import SectionComponent from './Section'
import FooterComponent from '../Footer'
import { CaravanBgDiv, CaravanBgh1, CaravanBgh2, CaravanBgh3 } from '../Styles/Caravan'

const CaravanComponent = () => {
  return (
    <>
      <Navbarcomponent/>
      <CaravanBgDiv>
        <CaravanBgh3>Home / Caravan</CaravanBgh3>
        <CaravanBgh2>Our ranges</CaravanBgh2>
        <CaravanBgh1>Caravan</CaravanBgh1>
      </CaravanBgDiv>
      <SectionComponent/>
      <FooterComponent/>
    </>
  )
}

export default CaravanComponent