import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Mockdata } from "../../MockData/mockdata";
import Navbarcomponent from "../Navbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { BasicTabsMainDiv, DetailMainBg } from "../../Styles/DetailedPageStyle/DetailedPage";
import FooterComponent from "../../Footer";
import BasicTabs from "./TabsDetailedPage";

const DetailedPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const data = Mockdata.find((car) => car.id === id);
    setCar(data);
  }, [id]);

  if (!car) {
    return <div>Loading or not found...</div>;
  }

  return (
    <>
      <Navbarcomponent />
      <DetailMainBg>
        <h1>Aidal</h1>
        <Stack spacing={2} direction="row">
          <Button size="large" variant="contained">
            ADD TO CART
          </Button>
          <Button color="inherit" size="large" variant="outlined">
            COMPARE
          </Button>
        </Stack>
      </DetailMainBg>

      <BasicTabsMainDiv>
         <BasicTabs/>
      </BasicTabsMainDiv>
      
      <FooterComponent/>
    </>
  );
};

export default DetailedPage;
