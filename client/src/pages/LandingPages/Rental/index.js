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
import auction2 from "assets/images/auction/10.jpg";
import auction1 from "assets/images/auction/1.jpg";
import auction3 from "assets/images/auction/5.jpg";
import MKTypography from "components/MKTypography";
import Header from "pages/Company/Pricing/sections/Header";
import Icon from "@mui/material/Icon";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GroupsIcon from '@mui/icons-material/Groups';
import FeaturedVehicles from "pages/Company/Pricing/sections/Testimonials";
import ContactUs from "pages/Support/ContactUs/index"
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

function Rental() {
  const brand = 
  <MKBox
    component="img"
    src={brandImage} 
    borderRadius="lg"    // shadow="md"
    width="50%"
    height="50%"
    position="relative"
    zIndex={1}
  />
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%" zIndex={5} sx={{backgroundColor: 'red'}}>
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
      </MKBox>
      <Header />
      <MKBox
          sx={{
            height: '150px',
            backgroundColor: 'rgba(16, 33, 39, 1)',
            marginTop: '-15px',
            zIndex: '3',
            marginTop: '-150px'
          }}
      />
      <MKBox sx={{display: 'flex', justifyContent: 'center'}} mt={10}>
        <MKTypography variant="h1" color="black" fontFamily="aria">
          Why Auction for Buying Car?<br/>
        </MKTypography>
      </MKBox>
      <MKBox>
        <Grid container xs={12} md={12} lg={12} >
          <Grid item xs={12} md={6} lg={6} >
          <MKBox
            component="img"
            src={auction2} 
            borderRadius="lg"
            // shadow="md"
            width="40%"
            height="40%"
            mt={15}
            ml={30}
            zIndex={1}
            sx={{border: '1px solid black'}}
            position="relative"
          />
          <br/>
          <MKBox
            component="img"
            src={auction3} 
            borderRadius="lg"
            // shadow="md"
            width="40%"
            height="40%"
            ml={60}
            mt={-12}
            zIndex={2}
            sx={{border: '1px solid black'}}
            position="relative"
          /><br/>
          <MKBox
            component="img"
            src={auction1} 
            borderRadius="lg"
            // shadow="md"
            width="40%"
            height="40%"
            mt={-12}
            ml={30}
            zIndex={1}
            sx={{border: '1px solid black'}}
            position="relative"
          />
          </Grid>
          <Grid item xs={12} md={6} lg={6} sx={{paddingRight: '15%', paddingLeft: '5%'}}>
            <Grid container xs={12} md={12} lg={12} sx={{marginTop: '180px'}}>
              <Grid item xs={12} md={1} lg={1} >
                <ManageSearchIcon
                  fontSize="large"
                  color="info"
                />
              </Grid>
              <Grid xs={12} md={11} lg={11} sx={{paddingRight: '15%'}}>
                <MKTypography variant="h3" color="black" sx={{fontFamily: 'aria'}}>
                  Buyers often find rare items.
                </MKTypography>
                <MKTypography variant="body2" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
                  Buyers often find rare items and can usually take home their purchase right away from an onsite auction.
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container xs={12} md={12} lg={12} sx={{marginTop: '50px'}}>
              <Grid item xs={12} md={1} lg={1} >
                <DepartureBoardIcon
                  fontSize="large"
                  color="info"
                />
              </Grid>
              <Grid xs={12} md={11} lg={11} sx={{paddingRight: '15%'}}>
                <MKTypography variant="h3" color="black" sx={{fontFamily: 'aria'}}>
                  Sellers at auction can usually be assured.
                </MKTypography>
                <MKTypography variant="body2" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
                  Sellers at auction can usually be assured that their property will sell on a certain day.
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container xs={12} md={12} lg={12} sx={{marginTop: '50px'}}>
              <Grid item xs={12} md={1} lg={1} >
                <EmojiEmotionsIcon
                  fontSize="large"
                  color="info"
                />
              </Grid>
              <Grid xs={12} md={11} lg={11} >
                <MKTypography variant="h3" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
                  Bidders have a great time.
                </MKTypography>
                <MKTypography variant="body2" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
                  Bidders have a great time, even if they don’t always get their chosen item.
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container xs={12} md={12} lg={12} sx={{marginTop: '50px'}}>
              <Grid item xs={12} md={1} lg={1} >
                <RemoveRedEyeIcon
                  fontSize="large"
                  color="info"
                />
              </Grid>
              <Grid xs={12} md={11} lg={11} >
                <MKTypography variant="h3" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
                  Spectators at auction enjoy an exciting event.
                </MKTypography>
                <MKTypography variant="bodys" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
                  Spectators at auction enjoy an exciting event and seeing what types of items are offered in auctions these days.
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container xs={12} md={12} lg={12} sx={{marginTop: '50px'}}>
              <Grid item xs={12} md={1} lg={1} >
                <GroupsIcon
                  fontSize="large"
                  color="info"
                />
              </Grid>
              <Grid xs={12} md={11} lg={11} >
                <MKTypography variant="h3" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
                  Auctions are a community event.
                </MKTypography>
                <MKTypography variant="body2" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
                  Auctions are a community event. People see friends and meet new people.
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox
          sx={{
            height: '80px',
            backgroundColor: 'rgba(16, 33 , 36, 1)',
            zIndex: '3',
            marginTop: '200px',
            // marginLeft: '50px',
            // marginRight: '50px',
            paddingLeft: '13%',
            paddingRight: '13%',
            paddingTop: '10px',
            // border: '7px solid rgba(0, 0, 0, 1)'
          }}
      >
        <MKTypography variant="h1" color="white" sx={{marginLeft: '-10%', fontFamily: 'aria'}}>
          Featured Vehicles
        </MKTypography>
      </MKBox>
      <MKBox
          sx={{
            height: '60px',
            backgroundColor: 'rgba(16, 33 , 36, 0.6)',
            zIndex: '3',
            // marginLeft: '80px',
            // marginRight: '80px',
            marginTop: '20px',
            paddingLeft: '13%',
            paddingRight: '13%',
            // border: '7px solid rgba(0, 0, 0, 1)',
          }}
      />
      <MKBox
          sx={{
            height: '200px',
            backgroundColor: 'rgba(16, 33 , 36, 1)',
            zIndex: '3',
            // marginLeft: '100px',
            marginTop: '40px',
            paddingLeft: '13%',
            paddingRight: '13%',
            border: '1px solid rgba(0, 0, 0, 1)',
          }}
      >
        <FeaturedVehicles />
      </MKBox>
      
    <Places />
    <MKBox
      sx={{
        height: '80px',
        backgroundColor: 'rgba(0, 0, 130, 0.3)',
        zIndex: '3',
        marginTop: '150px',
        paddingLeft: '13%',
        paddingRight: '13%',
      }}
    >
        <MKTypography variant="h1" color="white" sx={{marginLeft: '3%', fontFamily: 'aria'}}>Place where anybody can take part in auction</MKTypography>
    </MKBox>
    <Testimonials />
    <MKBox sx={{backgroundColor: 'rgba(100,100,100,0)'}}>'
    <Grid container xs={12} lg={12} md={12}>
      <Grid item xs={12} lg={8} md={8}>
        <Faq />
      </Grid>
      <Grid item xs={12} lg={4} md={4}>
        <ContactUs/>
      </Grid>
    </Grid>
    </MKBox>
    <MKBox pt={6} px={1} mt={6} sx={{backgroundColor: "rgba(35, 34 , 45, 1)"}}>
      <DefaultFooter content={footerRoutes} />
    </MKBox>
    </>
  );
}

export default Rental;
