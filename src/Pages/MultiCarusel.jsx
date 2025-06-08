import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { ProductService } from "./service/ProductService";
import ArrowDown from "../assets/down-arrow.svg"
import {
  ImageWrapper,
  MultiButton,
  MultiDownArrowDiv,
  MultiH4,
  MultiImg,
  MultiMainDiv,
  MultiMainWrapper,
  RecommendDiv,
  RecommendH1,
  RecommendUnderline,
} from "../Styles/MultiCarousel";

export const RecommendComp = () => {
  return (
    <RecommendDiv>
      <RecommendUnderline>
        <RecommendH1>Recommend</RecommendH1>
      </RecommendUnderline>
    </RecommendDiv>
  );
};

const MultiCaruselComponent = () => {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <MultiMainDiv>
        <MultiMainWrapper>
          <ImageWrapper>
            <MultiImg
              src={product.image}
              alt={product.name}
              className="w-6 shadow-2"
            />
          </ImageWrapper>
          <div>
            <MultiH4>{product.name}</MultiH4>
            <MultiButton>Discover the range</MultiButton>
            <Tag
              value={product.inventoryStatus}
              severity={getSeverity(product)}
            ></Tag>
            <MultiDownArrowDiv>
              <h3>Choose a model</h3>
              <img src={ArrowDown} alt="" />
            </MultiDownArrowDiv>
          </div>
        </MultiMainWrapper>
      </MultiMainDiv>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={products}
        numVisible={4}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
};
 
export default MultiCaruselComponent;
