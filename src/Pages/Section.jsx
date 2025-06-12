import ArrowDown from "../assets/down-arrow.svg";
import Compare1Img from "../assets/Compare1.svg";
import Compare2Img from "../assets/Compare2.svg";
import Compare3Img from "../assets/CarImg8.svg";
import Menu1 from "../assets/MenuIcon.svg";
import Menu2 from "../assets/MenuIcon2.svg";
import BurgerImg from "../assets/burgerButton.svg";
import Star from "../assets/StarImg.svg";
import {
  BrandNameDiv,
  CarName,
  CarNameDiv,
  ChildBgImg,
  ComopareImg,
  CompareImgDiv,
  CompareImgWrapper,
  CompareP,
  Dollor,
  DownArrowDiv,
  FromToInput,
  FromToMain,
  InputCheckbox,
  Menu1Div,
  Menu2Div,
  MenuDiv,
  OrderBtn,
  OrderBtnDiv,
  SectionBottomChild,
  SectionLedtINput,
  SectionLeft,
  SectionLeftBtn,
  SectionLeftChildh2,
  SectionLeftChildInput,
  SectionLeftChildTitle,
  SectionMain,
  Sectionright,
  SectionRightBottom,
  SectionRightTop,
  SectionRightTopRightDiv,
  SectionTopHiddenDiv,
  SectionTopRigthBtn,
  SelectDiv,
  SixtyDiv,
  SixtyDivHidden,
  SortByDiv,
  SortByDivHidden,
  Toph4,
  TopRightMain,
  TopSpan,
} from "../Styles/Section";

import { Mockdata } from "../MockData/mockdata";
import { Link } from "react-router-dom";

const SectionComponent = () => {
  const products = Mockdata;

  return (
    <SectionMain>
      <SectionLeft>
        <div>
          <SectionLeftChildh2>Cost of car</SectionLeftChildh2>
          <hr />
          <FromToMain>
            <div>
              <p>from</p>
              <FromToInput type="text" />
            </div>
            <div>
              <p>to</p>
              <FromToInput type="text" />
            </div>
          </FromToMain>
        </div>
        <div>
          <SectionLeftChildTitle>
            <SectionLeftChildh2>Brand</SectionLeftChildh2>
            <img src={ArrowDown} alt="" />
          </SectionLeftChildTitle>
          <hr />
          <InputCheckbox>
            <SectionLedtINput>
              <SectionLeftChildInput type="checkbox" />
              <label htmlFor="">Aidal</label>
            </SectionLedtINput>
            <SectionLedtINput>
              <SectionLeftChildInput type="checkbox" />
              <label htmlFor="">Knal</label>
            </SectionLedtINput>
            <SectionLedtINput>
              <SectionLeftChildInput type="checkbox" />
              <label htmlFor="">escape</label>
            </SectionLedtINput>
          </InputCheckbox>
        </div>
        <div>
          <SectionLeftChildTitle>
            <SectionLeftChildh2>Company</SectionLeftChildh2>
            <img src={ArrowDown} alt="" />
          </SectionLeftChildTitle>
          <hr />
          <InputCheckbox>
            <SectionLedtINput>
              <SectionLeftChildInput type="checkbox" />
              <label htmlFor="">escape</label>
            </SectionLedtINput>
            <SectionLedtINput>
              <SectionLeftChildInput type="checkbox" />
              <label htmlFor="">Aidal</label>
            </SectionLedtINput>
          </InputCheckbox>
        </div>
        <div>
          <SectionLeftChildTitle>
            <SectionLeftChildh2>License type</SectionLeftChildh2>
            <img src={ArrowDown} alt="" />
          </SectionLeftChildTitle>
          <hr />
          <InputCheckbox>
            <SectionLedtINput>
              <SectionLeftChildInput type="checkbox" />
              <label htmlFor="">1 year</label>
            </SectionLedtINput>
            <SectionLedtINput>
              <SectionLeftChildInput type="checkbox" />
              <label htmlFor="">2 year</label>
            </SectionLedtINput>
            <SectionLedtINput>
              <SectionLeftChildInput type="checkbox" />
              <label htmlFor="">1.5 year</label>
            </SectionLedtINput>
          </InputCheckbox>
        </div>
        <div>
          <SectionLeftChildTitle>
            <SectionLeftChildh2>Number of travelers</SectionLeftChildh2>
            <img src={ArrowDown} alt="" />
          </SectionLeftChildTitle>
          <hr />
          <InputCheckbox>
            <SectionLedtINput>
              <SectionLeftChildInput type="checkbox" />
              <label htmlFor="">2</label>
            </SectionLedtINput>
            <SectionLedtINput>
              <SectionLeftChildInput type="checkbox" />
              <label htmlFor="">3-4</label>
            </SectionLedtINput>
            <SectionLedtINput>
              <SectionLeftChildInput type="checkbox" />
              <label htmlFor="">5+</label>
            </SectionLedtINput>
          </InputCheckbox>
        </div>
        <div>
          <SectionLeftChildTitle>
            <SectionLeftChildh2>Location</SectionLeftChildh2>
            <img src={ArrowDown} alt="" />
          </SectionLeftChildTitle>
          <hr />
          <InputCheckbox>
            <SectionLedtINput>
              <SectionLeftChildInput type="checkbox" />
              <label htmlFor="">Seoul</label>
            </SectionLedtINput>
            <SectionLedtINput>
              <SectionLeftChildInput type="checkbox" />
              <label htmlFor="">Korea</label>
            </SectionLedtINput>
            <SectionLedtINput>
              <SectionLeftChildInput type="checkbox" />
              <label htmlFor="">Pusan</label>
            </SectionLedtINput>
          </InputCheckbox>
        </div>
        <FromToMain>
          <SectionLeftBtn>Cancel</SectionLeftBtn>
          <SectionLeftBtn $second>Search</SectionLeftBtn>
        </FromToMain>
        <CompareP>Compare</CompareP>
        <CompareImgWrapper>
          <CompareImgDiv>
            <ComopareImg src={Compare1Img} alt="" />
          </CompareImgDiv>
          <CompareImgDiv>
            <ComopareImg src={Compare2Img} alt="" />
          </CompareImgDiv>
          <CompareImgDiv>
            <ComopareImg src={Compare3Img} alt="" />
          </CompareImgDiv>
        </CompareImgWrapper>
      </SectionLeft>
      <Sectionright>
        <SectionRightTop>
          <SectionRightTopRightDiv>
            <SectionTopRigthBtn src={BurgerImg} alt="" />
            <Toph4>
              Item <TopSpan>25.156</TopSpan>
            </Toph4>
          </SectionRightTopRightDiv>

          <TopRightMain>
            <SortByDiv>
              <p>Sort by</p>
              <SelectDiv>
                <p>Select</p>
                <DownArrowDiv>
                  <img src={ArrowDown} alt="" />
                </DownArrowDiv>
              </SelectDiv>
            </SortByDiv>
            <SixtyDiv>
              <p>60</p>
              <DownArrowDiv>
                <img src={ArrowDown} alt="" />
              </DownArrowDiv>
            </SixtyDiv>
            <MenuDiv>
              <Menu1Div>
                <img src={Menu1} alt="" />
              </Menu1Div>
              <Menu2Div>
                <img src={Menu2} alt="" />
              </Menu2Div>
            </MenuDiv>
          </TopRightMain>
        </SectionRightTop>
        <SectionTopHiddenDiv>
          <SortByDivHidden>
            <p>Sort by</p>
            <SelectDiv>
              <p>Select</p>
              <DownArrowDiv>
                <img src={ArrowDown} alt="" />
              </DownArrowDiv>
            </SelectDiv>
          </SortByDivHidden>
          <SixtyDivHidden>
            <p>60</p>
            <DownArrowDiv>
              <img src={ArrowDown} alt="" />
            </DownArrowDiv>
          </SixtyDivHidden>
        </SectionTopHiddenDiv>
        <hr />
        <SectionRightBottom>
          {products.map((product) => (
            <Link className="NavLink" key={product.id} to={`/motor/${product.id}`}>
              <SectionBottomChild >
                <ChildBgImg>{/* bg image */}</ChildBgImg>
                <div>
                  <CarName>{product.name}</CarName>
                  <BrandNameDiv>
                    <p>{product.brand}</p>
                    <CarNameDiv>
                      <img src={Star} alt="" />
                      <p>{product.ranking}</p>
                    </CarNameDiv>
                  </BrandNameDiv>
                  <Dollor>{product.cost} $</Dollor>
                  <OrderBtnDiv>
                    <OrderBtn>Order </OrderBtn>
                    <OrderBtn>Compare</OrderBtn>
                  </OrderBtnDiv>
                </div>
              </SectionBottomChild>
            </Link>
          ))}
        </SectionRightBottom>
      </Sectionright>
    </SectionMain>
  );
};

export default SectionComponent;
