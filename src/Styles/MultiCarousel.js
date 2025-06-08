import styled from "styled-components";

export const RecommendDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  @media only screen and (max-width: 750px) {
    justify-content: start;
    padding-left: 70px;
  }
`;
export const RecommendUnderline = styled.div`
  border-bottom: 4px solid #ff7a00;
`;
export const RecommendH1 = styled.h1`
  color: var(--text, #373737);
  text-align: center;
  font-family: Gilroy;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 10px;
`;

export const MultiMainDiv = styled.div`
  display: grid;
  grid-template-areas: "a a a a";
  /* gap: 20px; */
  align-items: center;
  justify-content: center;
  margin: 20px 40px;
  padding: 30px;
  @media only screen and (max-width: 1790px) {
    grid-template-areas: "a a a";
  }
`;
export const MultiMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MultiImg = styled.img`
  width: 290px;
  height: 167px;
  flex-shrink: 0;
  /* border: 1px solid red; */
`;
export const MultiH4 = styled.h4`
  color: var(--text, #373737);
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 15px;
`;
export const MultiButton = styled.button`
  margin-top: 10px;
  width: 259px;
  height: 45px;
  flex-shrink: 0;
  background-color: #006dab;
  border: 150gradus 20gradus 150gradus 20gradus;
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const MultiDownArrowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
