/**
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Fragment } from "react";
import { url } from "constant/url";
// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

import AddRoadIcon from "@mui/icons-material/AddRoad";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useRef } from "react";

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import Grid from "@mui/material/Grid";
// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKTypography from "components/MKTypography";
import { Avatar } from "@mui/material";
// eslint-disable-next-line react/prop-types
function VehicleCard({ image, title, description, vehicleInfo, action }) {

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
    // boxShadow: '3',
    transition: "opacity 0.15s ease",

    "&:hover, &:focus": {
      opacity: 1,
    },
  };

  // SwiperJS navigation buttons ref
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Card
      sx={{border: '1px solid black'}}
    >
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        
      <MKBox position="relative">
        <Swiper
          onInit={({ params, navigation }) => {
            const { navigation: nav } = params;

            nav.prevEl = navigationPrevRef.current;
            nav.nextEl = navigationNextRef.current;
            navigation.init();
            navigation.update();
          }}
          // autoplay={{ delay: 7000 * Math.random()}}
          // autoplay='none'
          // speed={800}
          spaceBetween={0}
          slidesPerView={1}
          loop
        >
          <SwiperSlide>
            <Grid xs={12} md={12} lg={12}>
              <MKBox
                component="img"
                // src={  }
                src={`data:${image.contentType[0]};base64,${image.data[0]}`} 
                alt={title}
                borderRadius="none"
                shadow="md"
                width="100%"
                height="200px"
                position="relative"
                border="1px solid black"
                zIndex={1}
              />
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container xs={12} md={12} lg={12}>
              <MKBox
                component="img"
                // src={  }
                src={`data:${image.contentType[1]};base64,${image.data[1]}`} 
                alt={title}
                borderRadius="none"
                shadow="md"
                width="100%"
                height="200px"
                border="1px solid black"
                position="relative"
                zIndex={1}
              />
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container xs={12} md={12} lg={12}>
              <MKBox
                component="img"
                // src={  }
                src={`data:${image.contentType[2]};base64,${image.data[2]}`} 
                alt={title}
                borderRadius="none"
                shadow="md"
                width="100%"
                height="200px"
                border="1px solid black"
                position="relative"
                zIndex={1}
              />
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container xs={12} md={12} lg={12}>
              <MKBox
                component="img"
                // src={  }
                src={`data:${image.contentType[3]};base64,${image.data[3]}`} 
                alt={title}
                borderRadius="none"
                shadow="md"
                width="100%"
                height="200px"
                border="1px solid black"
                position="relative"
                zIndex={1}
              />
            </Grid>
          </SwiperSlide>
          <MKTypography
            variant="h2"
            color="dark"
            sx={{
              ...navigationStyles,
              left: 0,
              boxShadow: 6,
              color: 'rgba(255, 255, 255, 1)',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              top: '40%',
              width: '30px',
              height: '30px'
            }}
            
            ref={navigationPrevRef}
          >
            <Icon>chevron_left</Icon>
          </MKTypography>
          <MKTypography
            variant="h2"
            color="dark"
            sx={{
              ...navigationStyles,
              right: 0,
              boxShadow: 6,
              color: 'rgba(255, 255, 255, 1)',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              top: '40%',
              width: '30px',
              height: '30px'
            }}
            ref={navigationNextRef}
          >
            <Icon>chevron_right</Icon>
          </MKTypography>
        </Swiper>
      </MKBox>
      </MKBox>
      <MKBox p={3} mt={-2}>
        <MKTypography display="inline" variant="h6" fontWeight="bold">
          {title}
        </MKTypography>
        <MKTypography display="block" variant="button" color="text" fontWeight="regular" mb={0.75}>
          <Fragment key={vehicleInfo.miles}>
            {vehicleInfo.miles}
            <AddRoadIcon />
            &nbsp;&bull;&bull;
          </Fragment>
          <Fragment key={vehicleInfo.fuel}>
            {vehicleInfo.fuel}
            <LocalGasStationIcon />
            &nbsp;&bull;&nbsp;
          </Fragment>
          <Fragment key={vehicleInfo.transmission}>
            {vehicleInfo.transmission}
            <DragIndicatorIcon />
          </Fragment>
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography variant="body2" component="p" color="text">
            {description}
          </MKTypography>
        </MKBox>
        {action.type === "external" ? (
          <MKButton
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </MKButton>
        ) : (
          <MKButton
            component={Link}
            to={action.route}
            variant="outlined"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </MKButton>
        )}
      </MKBox>
    </Card>
  );
}

// Typechecking props for the VehicleCard
VehicleCard.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  vehicleInfo: PropTypes.shape({
    miles: PropTypes.number,
    fuel: PropTypes.string,
    transmission: PropTypes.oneOf(["Manual", "Automatic"]),
  }).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default VehicleCard;
