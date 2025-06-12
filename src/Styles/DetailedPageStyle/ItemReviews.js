import styled from "styled-components";

export const Premium = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Premiumh1 = styled.h1`
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const PremiumSpan = styled.span`
  color: var(--blue, #006dab);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const BestWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  width: 177px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  background: #fff;
  color: var(--blue, #006dab);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
`;
export const BestArrowWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid rgba(55, 55, 55, 0.3);
`;
export const IRchild = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 45px;
`;
export const ChildImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  width: 100%;
  border: none;
  border-radius: 5px;
  /* background-color: #fafafa; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  flex: 1;
  display: flex;
  justify-content: start;
  overflow: hidden;
  @media only screen and (max-width: 1000px) {
    flex: 2;
  }
  @media only screen and (max-width: 700px) {
    flex: 2.5;
  }
`;
export const ChildCarImg = styled.img`
  height: 100px;
  width: 100%;
`;
export const ChildDataWrapper = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
`;
export const DataName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NameBrandDiv =styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
export const ChildCarName = styled.h2`
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const IdDiv = styled.div`
display: flex;
align-items: center;
justify-content: start;
width: 100px;
gap: 10px;
`
export const Id = styled.h3`
  color: rgba(55, 55, 55, 0.7);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const IdP = styled.p`
  color: #373737;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const CarChildBrand = styled.h4`
  color: rgba(55, 55, 55, 0.8);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const HrLine = styled.hr`
  margin-top: 60px;
`;
