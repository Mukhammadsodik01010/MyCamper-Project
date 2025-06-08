import React from 'react'
import Navbarcomponent from './Navbar'
import { CampingBgDiv, CampingBgh1, CampingBgh3, CampingChildBg1, CampingChildBg2, CampingChildBg3, CampingChildH1, CampingChildH2, CampingPlacesMain } from '../Styles/CampingPlace'
import FooterComponent from '../Footer'

const CampingPlaceComponent = () => {
  return (
    <>
    <Navbarcomponent/>
      <CampingBgDiv>
          <CampingBgh3>Home / Camping place</CampingBgh3>
          <CampingBgh1>Camping places</CampingBgh1>
      </CampingBgDiv>
      <CampingPlacesMain>
        <div>
          <CampingChildBg1>
            {/* bg */}
          </CampingChildBg1>
          <CampingChildH1>Camping place name</CampingChildH1>
          <CampingChildH2>Location</CampingChildH2>
        </div>
        <div>
          <CampingChildBg2>
            {/* bg */}
          </CampingChildBg2>
          <CampingChildH1>Camping place name</CampingChildH1>
          <CampingChildH2>Location</CampingChildH2>
        </div>
        <div>
          <CampingChildBg3>
            {/* bg */}
          </CampingChildBg3>
          <CampingChildH1>Camping place name</CampingChildH1>
          <CampingChildH2>Location</CampingChildH2>
        </div>
        <div>
          <CampingChildBg1>
            {/* bg */}
          </CampingChildBg1>
          <CampingChildH1>Camping place name</CampingChildH1>
          <CampingChildH2>Location</CampingChildH2>
        </div>
        <div>
          <CampingChildBg2>
            {/* bg */}
          </CampingChildBg2>
          <CampingChildH1>Camping place name</CampingChildH1>
          <CampingChildH2>Location</CampingChildH2>
        </div>
        <div>
          <CampingChildBg3>
            {/* bg */}
          </CampingChildBg3>
          <CampingChildH1>Camping place name</CampingChildH1>
          <CampingChildH2>Location</CampingChildH2>
        </div>
        <div>
          <CampingChildBg1>
            {/* bg */}
          </CampingChildBg1>
          <CampingChildH1>Camping place name</CampingChildH1>
          <CampingChildH2>Location</CampingChildH2>
        </div>
        <div>
          <CampingChildBg2>
            {/* bg */}
          </CampingChildBg2>
          <CampingChildH1>Camping place name</CampingChildH1>
          <CampingChildH2>Location</CampingChildH2>
        </div>
        <div>
          <CampingChildBg3>
            {/* bg */}
          </CampingChildBg3>
          <CampingChildH1>Camping place name</CampingChildH1>
          <CampingChildH2>Location</CampingChildH2>
        </div>
      </CampingPlacesMain>
      <FooterComponent/>  
    </>
  )
}

export default CampingPlaceComponent