import React from "react";
import { useEffect } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as listProducts } from "../redux/actions/productActions";
import { Box, Typography, Badge, Button, styled, SliderThumb } from "@mui/material";
import MidSection from "./MidSection";
const Component = styled(Box)`
  background: #f2f2f2;
  padding: 10px;
`;

function Home(props) {
  const getProducts = useSelector((state) => state.getProducts);

  const { products, error } = getProducts;
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide
          data={products}
          title="Discounts for You"
          timer={true}
          multi={true}
        />
        <MidSection/>
        <Slide
          data={products}
          title="Suggested Items"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Top Selection"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Recommended Items"
          timer={false}
          multi={true}
        />
      </Component>
    </>
  );
}

export default Home;
