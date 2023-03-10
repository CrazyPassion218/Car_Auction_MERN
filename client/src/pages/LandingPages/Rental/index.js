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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Rental page sections
import Places from "pages/LandingPages/Rental/sections/Places";
import Testimonials from "pages/LandingPages/Rental/sections/Testimonials";
import Faq from "pages/LandingPages/Rental/sections/Faq";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
// Images
// import bgImage from "assets/images/motors.stylemixthemes.com/background.jpg";
import brandImage from "assets/images/brands/brands2.png"
import MKTypography from "components/MKTypography";
import Header from "pages/Company/Pricing/sections/Header";

function Rental() {
  const brand = 
  <MKBox
    component="img"
    src={brandImage} 
    borderRadius="lg"
    // shadow="md"
    width="50%"
    height="50%"
    position="relative"
    zIndex={1}
  />
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/",
          label: "sign in",
          color: "info",
        }}
        transparent
        light
        brand={brand}
      />
      <Header />
      <MKBox
          sx={{
            height: '200px',
            backgroundColor: 'rgba(20, 20, 15, 1)',
            marginTop: '-15px',
            zIndex: '3',
          }}
      >
          <MKTypography>FEATURED ITMES</MKTypography>
      </MKBox>
      <MKBox>
        <Grid container xs={12} md={12} lg={12} >
          <Grid item xs={12} md={12} lg={12} >

          </Grid>
          <Grid item xs={12} md={12} lg={12} >

          </Grid>
          <Grid item xs={12} md={12} lg={12} >

          </Grid>
        </Grid>
      </MKBox>
    <Places />
    <Testimonials />
    <Faq />
    <MKBox pt={6} px={1} mt={6}>
      <DefaultFooter content={footerRoutes} />
    </MKBox>
    </>
  );
}

export default Rental;
