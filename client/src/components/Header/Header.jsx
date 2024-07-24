import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  styled,
} from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)`
  background: #19376d;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  color: #ffffff;
  padding-right: 2%;
  text-decoration: none;
`;
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});
const CustomButtonWrapper = styled(Box)`
  margin: 0 5% 0 auto;
`;
function Header(props) {
  const [open, setOpen] = useState(false);
  const[showHeaderbuttons,setsShowHeaderbuttons]=useState(true)

  const handleClose = () => {
    setOpen(false);
    setsShowHeaderbuttons(true);
  };

  const handleOpen = () => {
    setOpen(true);
    setsShowHeaderbuttons(false);
  };
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
    const list = () => (
      <Box style={{ width: 250 }} onClick={handleClose}>
          <List>
              <listItem button>
                  <CustomButtons />
              </listItem>
          </List>
      </Box>
  );
  return (
    <div>
      <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
          <MenuButton  color="inherit"
                    onClick={handleOpen}>
            <Menu />
          </MenuButton>
          <Drawer open={open} onClose={handleClose}>

          {list()}

          </Drawer>

          <Component to="/">
            {/* <img src={logoURL} style={{ width: 75 }} /> */}
            <h3>ClickKart</h3>
            <Box component="span" style={{ display: "flex" }}>
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style={{ color: "#FFE500" }}>
                  Plus
                </Box>
              </SubHeading>
              <PlusImage src={subURL} />
            </Box>
          </Component>
          <Search />
          <CustomButtonWrapper>
            {showHeaderbuttons &&<CustomButtons />}
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </div>
  );
}

export default Header;
