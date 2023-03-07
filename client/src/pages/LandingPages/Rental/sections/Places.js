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

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Images

import vehicle1 from "assets/images/motors.stylemixthemes.com/01-6-255x135.jpg";

import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// Images
import MKTypography from "../../../../components/MKTypography";
import VehicleAuctionCard from "../../../../components/VehicleCards/VehicleAuctionCard";
import VehicleCard from "../../../../components/VehicleCards/VehicleCard";
import MKButton from "components/MKButton";
import { listOpen } from "api/auction";
import Card from "assets/theme/components/card";

function useInterval(callback, delay) {
  const savedCallback = useRef();
  
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}
const timeNow = Date.now();
const Places = () => {
  const actionProps = {
    type: "internal",
    route: "pages/AuctionPage/BidAuction",
    color: "success",
    label: "place a bid",
  };
  const actionProps1 = {
    type: "internal",
    route: "/",
    color: "success",
    label: "add to my cart",
  };
  const navigate = useNavigate();
  // const [auctionPrice, setAuctionPrice] = useState('');
  // const [auctionPeople, setAuctionPeople] = useState(0);
  const [nowTime, setNowTime] = useState(Date.now());
  const [auctions, setAuctions] = useState([]);
  const onClickCreate = () => {
    navigate('pages/AuctionPage/CreateAuction')
  };
  useInterval(() => {
      setNowTime(nowTime + 1000);
  }, 1000);
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listOpen(signal).then((result) => {
      if (!result) {
        // setRedirectToSignin(true)
      } else {
        setAuctions(result);
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])
  const dateStart = new Date(timeNow);

  return (
    <>
      <MKBox component="section" py={1}>
        <Container>
          <Grid
            container
            item
            xs={8}
            flexDirection="column"
            alignItems="center"
            mx="auto"
            textAlign="left"
            mb={6}
          >
            <MKTypography variant="h3" mb={1}>
              Auction
            </MKTypography>
            <MKButton variant="gradient" color="info" onClick={onClickCreate}>
              Create my Auction
            </MKButton>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 3 }}>
          {
            auctions.map((auction, index) => {
              return (
                <Grid item xs={12} md={6} lg={3} key={auction._id}>
                  <MKBox mt={3}>
                    <VehicleAuctionCard
                      image={auction.image}
                      auction={auction}
                      now={nowTime}
                      title={auction.itemName}
                      vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                      timeData={{ timeStart: auction.bidStart, timeEnd: auction.bidEnd }}
                      topBidPrice={auction.startingBid}
                      allBidCount={auction.bids.length}
                      action={actionProps}
                    />
                  </MKBox>
                </Grid>
              )
            })
          }
          </Grid>
        </Container>
      </MKBox>
      {/* <MKBox component="section" py={1}>
        <Container>
          <Grid
            container
            item
            xs={8}
            flexDirection="column"
            alignItems="center"
            mx="auto"
            textAlign="left"
            mb={6}
          >
            <MKTypography variant="h4" mb={1}>
              Fixed Price
            </MKTypography>
          </Grid>
          <Grid container spacing={1} sx={{ mt: 3 }}>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  action={actionProps1}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  action={actionProps1}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  action={actionProps1}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  action={actionProps1}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  action={actionProps1}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  action={actionProps1}
                />
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox> */}
    </>
  );
};

export default Places;
