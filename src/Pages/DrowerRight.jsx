import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import RightArrow from "../assets/RightArrovVector.svg";
import BurgerImg from "../assets/burgerButton.svg";
import { Link } from "react-router-dom";
import { DrowerLinkWrapper, DrowerMain } from "../Styles/Drower";


const TemporaryDrawerRight = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <DrowerMain>
        <DrowerLinkWrapper>
            <Link className="NavLink" to={"/motor"}>
                <p>Motor</p>
            </Link>
            <img src={RightArrow} alt="" />
        </DrowerLinkWrapper>
        <DrowerLinkWrapper>
            <Link className="NavLink" to={"/caravan"}>
                <p>Caravan</p>
            </Link>
            <img src={RightArrow} alt="" />
        </DrowerLinkWrapper>
        <DrowerLinkWrapper>
            <Link className="NavLink" to={"/tuning"}>
                <p>Tuning</p>
            </Link>
            <img src={RightArrow} alt="" />
        </DrowerLinkWrapper>
        <DrowerLinkWrapper>
            <Link className="NavLink" to={"/usedcar"}>
                <p>Used Car</p>
            </Link>
            <img src={RightArrow} alt="" />
        </DrowerLinkWrapper>
        <DrowerLinkWrapper>
            <Link className="NavLink" to={"/campingplace"}>
                <p>Camping Place</p>
            </Link>
        </DrowerLinkWrapper>
      </DrowerMain>
    </Box>
  );

  return (
    <div>
      <img src={BurgerImg} onClick={toggleDrawer(true)} />
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
export default TemporaryDrawerRight;
