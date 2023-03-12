/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useRef } from "react";

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import ComplexReviewCard from "examples/Cards/ReviewCards/ComplexReviewCard";

// Images
import review1 from "assets//images/auction/classic3.jpg";
import review2 from "assets/images/auction/classic5.jpg";
import review3 from "assets/images/auction/classic2.jpg";
import review4 from "assets/images/auction/modern.jpg";
import review5 from "assets/images/auction/8.jpg";
import review6 from "assets/images/car/car4.jpg";
import Grid from "@mui/material/Grid";

function Testimonials() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  // Swiper navigation buttons styles
  const navigationStyles = {
    position: "absolute",
    top: 0,
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
    height: "100%",
    textAlign: "center",
    opacity: 0.5,
    cursor: "pointer",
    transition: "opacity 0.15s ease",

    "&:hover, &:focus": {
      opacity: 1,
    },
  };

  // SwiperJS navigation buttons ref
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <MKBox position="relative">
      <Swiper
        onInit={({ params, navigation }) => {
          const { navigation: nav } = params;

          nav.prevEl = navigationPrevRef.current;
          nav.nextEl = navigationNextRef.current;
          navigation.init();
          navigation.update();
        }}
        autoplay={{ delay: 5000 }}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        <SwiperSlide>
          <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={12} md={12} lg={12} display="flex" justifyContent="center"> 
              <MKBox
                component="img"
                src={review1}
                width="20%"
                height="200px"
                borderRadius="md"
                shadow="md"
                sx={{border: '1px solid black'}}
              />
              <MKBox
                component="img"
                src={review2}
                width="20%"
                height="200px"
                borderRadius="md"
                shadow="md"
                sx={{border: '1px solid black'}}
              />
              <MKBox
                component="img"
                src={review3}
                width="20%"
                height="200px"
                borderRadius="md"
                shadow="md"
                sx={{border: '1px solid black'}}
              />
              <MKBox
              component="img"
              src={review4}
              width="20%"
              height="200px"
              borderRadius="md"
              shadow="md"
              sx={{border: '1px solid black'}}
            />
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container xs={12} md={12} lg={12} display="flex" justifyContent="center">
            <MKBox
              component="img"
              src={review4}
              width="20%"
              height="200px"
              borderRadius="md"
              shadow="md"
              sx={{border: '1px solid black'}}
            />
            <MKBox
              component="img"
              src={review5}
              width="20%"
              height="200px"
              borderRadius="md"
              shadow="md"
              sx={{border: '1px solid black'}}
            />
            <MKBox
              component="img"
              src={review6}
              width="20%"
              height="200px"
              borderRadius="md"
              shadow="md"
              sx={{border: '1px solid black'}}
            />
            <MKBox
              component="img"
              src={review1}
              width="20%"
              height="200px"
              borderRadius="md"
              shadow="md"
              sx={{border: '1px solid black'}}
            />
          </Grid>
        </SwiperSlide>
        <MKTypography
          variant="h2"
          color="primary"
          sx={{
            ...navigationStyles,
            left: 0,
          }}
          ref={navigationPrevRef}
        >
          <Icon>chevron_left</Icon>
        </MKTypography>
        <MKTypography
          variant="h2"
          color="primary"
          sx={{
            ...navigationStyles,
            right: 0,
          }}
          ref={navigationNextRef}
        >
          <Icon>chevron_right</Icon>
        </MKTypography>
      </Swiper>
    </MKBox>
  );
}

export default Testimonials;
