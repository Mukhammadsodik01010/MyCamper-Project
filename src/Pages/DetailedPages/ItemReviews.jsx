import Arrow5 from "../../assets/down-arrow.svg";
import { Mockdata } from "../../MockData/mockdata";
import {
  BestArrowWrap,
  BestWrap,
  CarChildBrand,
  ChildCarImg,
  ChildCarName,
  ChildDataWrapper,
  ChildImageWrapper,
  DataName,
  HrLine,
  Id,
  IdDiv,
  IdP,
  IRchild,
  NameBrandDiv,
  Premium,
  Premiumh1,
  PremiumSpan,
} from "../../Styles/DetailedPageStyle/ItemReviews";

const ItemReviewsComponent = () => {
  const carsData = Mockdata;
  return (
    <>
      <Premium>
        <Premiumh1>
          Premium Review <PremiumSpan>35</PremiumSpan>
        </Premiumh1>
        <div>
          <BestWrap>
            <p>Best</p>
            <BestArrowWrap>
              <img src={Arrow5} alt="" />
            </BestArrowWrap>
          </BestWrap>
        </div>
      </Premium>
      <div>
        {carsData.map((car) => (
          <IRchild>
            <ChildImageWrapper>
              <ChildCarImg src={car.image} alt="" />
            </ChildImageWrapper>
            <ChildDataWrapper>
              <DataName>
                <NameBrandDiv>
                  <ChildCarName>{car.name}</ChildCarName>
                  <CarChildBrand>{car.brand}</CarChildBrand>
                  <Id>{car.brand}</Id>
                </NameBrandDiv>
                <NameBrandDiv>
                  <IdDiv>
                    <Id>Id:</Id>
                    <IdP>{car.id}</IdP>
                  </IdDiv>
                  <IdDiv>
                    <Id>Date:</Id>
                    <IdP>{car.year}</IdP>
                  </IdDiv>
                  <IdDiv>
                    <Id>Location:</Id>
                    <IdP>{car.location}</IdP>
                  </IdDiv>
                </NameBrandDiv>
              </DataName>
            </ChildDataWrapper>
          </IRchild>
        ))}
        <HrLine />
      </div>
    </>
  );
};

export default ItemReviewsComponent;
