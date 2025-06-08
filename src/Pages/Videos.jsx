import React from 'react'
import { RecommendDiv, RecommendH1, RecommendUnderline } from '../Styles/MultiCarousel'
import { VideosChild, VideosChildLastTwo, VideosChildSecondLine, VideosMain } from '../Styles/videos'
import PopUpCompOne from './Popup'

const VideosComponent = () => {
  return (
    <>
        <RecommendDiv>
            <RecommendUnderline>
                <RecommendH1>Videos</RecommendH1>
            </RecommendUnderline>
        </RecommendDiv>
        <VideosMain>
            <VideosChild>
              <PopUpCompOne/>
            </VideosChild>
            <VideosChild>
              <PopUpCompOne/>
            </VideosChild>
            <VideosChild>
              <PopUpCompOne/>
            </VideosChild>
            <VideosChild>
              <PopUpCompOne/>
            </VideosChild>
            <VideosChildSecondLine>
              <PopUpCompOne/>
            </VideosChildSecondLine>
            <VideosChildSecondLine>
              <PopUpCompOne/>
            </VideosChildSecondLine>
            <VideosChildLastTwo>
              <PopUpCompOne/>
            </VideosChildLastTwo>
            <VideosChildLastTwo>
              <PopUpCompOne/>
            </VideosChildLastTwo>
        </VideosMain>
    </>
  )
}

export default VideosComponent