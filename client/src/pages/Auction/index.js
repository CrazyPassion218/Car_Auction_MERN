import { useEffect, useState, useRef } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import footerRoutes from "footer.routes";
// Material Kit 2 PRO React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/motors.stylemixthemes.com/slider2.jpg";
import AuctionCountdown from "components/VehicleCards/VehicleAuctionCard/AuctionCountdown";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
// @mui icons
import CloseIcon from "@mui/icons-material/Close";

const timeNow = Date.now();
const timeStart = new Date(timeNow);
const timeDuration = 100000
const timeEnd = Date.parse(timeStart) + timeDuration;
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
function Auction() {
    const [auctionPrice, setAuctionPrice] = useState(0);
    const [auctionPeople, setAuctionPeople] = useState(0);
    const [auctionTime, setAuctionTime] = useState(timeEnd);
    const [price, setPrice] = useState(0);
    const [bidders, setBidders] = useState([]);
    const [enableButton, setEnableButton] = useState(true);
    const [userName, setUserName] = useState(localStorage.getItem('auth') !== null?JSON.parse(localStorage.getItem('auth')).mail: '');
    const [completeAuction, setCompleteAuction] = useState(false);
    const navigate = useNavigate();
    const brand = <span style={{ fontSize: "2.5rem", color: "#9595f7" }}>iAuto</span>;
    const handleSetPrice = (ev) => {
        setPrice(ev.target.value);
    }
    const onClickPlaceBid = () => {
        // axios.get('http://localhost:3001/api/auctions/defaultphoto').then((obj) => {
            let data = {
                userId: bidders.length + 1,
                Email: userName,
                bidtime: Date.now(),
                bidPrice: price,
            }
            let newArray = bidders;
            // if(obj !== null){
                newArray.push(data);
                setBidders(newArray);
                setAuctionPeople(bidders.length);
                setAuctionPrice(bidders.length === 0?0:bidders[bidders.length - 1].bidPrice);
            // }
        // })
    }
    useInterval(() => {
        if (Date.now() > timeEnd) {
            setEnableButton(false);
            setCompleteAuction(true);
        }
      }, 1000);
    useEffect(() => {
       if(localStorage.getItem('auth') === null)navigate('/authentication/sign-in/basic');
    },[])
    useEffect(() => {
        let newValue = bidders.length === 0?0:bidders[bidders.length - 1].bidPrice;
        setEnableButton(parseInt(price)>parseInt(newValue)?true:false);
    },[price])
    const onClickOkBtn = () => {
        navigate('pages/landing-pages/rental');
    }
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
      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            sx={{ mx: "auto", textAlign: "center" }}
          />
        </Container>
      </MKBox>
    <Card
        sx={{
            p: 2,
            mx: { xs: 5, lg: 5 },
            mt: -35,
            mb: 4,
            backgroundColor: ({ palette: { black }, functions: { rgba } }) => rgba(black.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
            overflow: "hidden",
          }}
    >
        <MKTypography
            color="info"
            fontWeight='bold'
            variant="h1"
            px={3}
            textGradient
        >
            MERCEDES Benz  S-Class Sedan
        </MKTypography>
        <Grid container item xs={12} lg={12} md={12}>
            <Grid item xs={12} lg={7} md={7}>
                <MKBox component="section" py={9}
                    // minHeight="50vh"
                    width="100%"
                    sx={{
                        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                        rgba(gradients.dark.main, 0.1),
                        rgba(gradients.dark.state, 0.5)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                    height: '600px',
                }}/>
                <Grid container item xs={12} lg={12} md={12} sx={{justifyContent: 'space-between'}}>
                <Grid item xs={12} lg={4} md={4}>
                    <MKBox component="section" py={9}
                        // minHeight="50vh"
                        // width="100%"
                        sx={{
                            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                            `${linearGradient(
                            rgba(gradients.dark.main, 0.7),
                            rgba(gradients.dark.state, 0.7)
                            )}, url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "right",
                        display: "grid",
                        placeItems: "right",
                        height: '200px',
                    }}/>
                </Grid>
                <Grid item xs={12} lg={4} md={4}>
                    <MKBox component="section" py={9}
                        // minHeight="50vh"
                        // width="100%"
                        sx={{
                            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                            `${linearGradient(
                            rgba(gradients.dark.main, 0.5),
                            rgba(gradients.dark.state, 0.5)
                            )}, url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "grid",
                        placeItems: "center",
                        height: '200px',
                    }}/>
                </Grid>
                <Grid item xs={12} lg={4} md={4}>
                    <MKBox component="section" py={9}
                        // minHeight="50vh"
                        // width="100%"
                        sx={{
                            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                            `${linearGradient(
                            rgba(gradients.dark.main, 0.1),
                            rgba(gradients.dark.state, 0.1)
                            )}, url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "left",
                        display: "grid",
                        placeItems: "left",
                        height: '200px',
                    }}/>
                </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12} lg={5} md={5}>
                <div>
                    <Accordion sx={{marginLeft: '20px'}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography
                            color="rgba(35, 149, 241)"
                            fontWeight='bold'
                            variant="h3"
                            px={3}
                        >
                            Key Highlights
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails px={3}>
                        <Typography
                            color="black"
                            fontFamily='aria'
                            fontWeight='bold'
                            variant="h5"
                            px={3}
                        >
                            New handcrafted AMG 2.0L inline-4 turbo engine<br/>
                            402 hp and 369 lb-ft of torque (+ 13 hp through electric starter-generator)Disclaimer[5]<br/>
                            0–60 mph in 4.6 seconds (est.)Disclaimer[6]<br/>
                            Top speed of 155 mph (electronically limited)Disclaimer[7]<br/>
                            AMG SPEEDSHIFT MCT 9-speed transmission<br/>
                            AMG Performance 4MATIC all-wheel driveDisclaimer[5]<br/>
                            AMG DYNAMIC SELECT drive modes<br/>
                            AMG RIDE CONTROL+ sport suspension with adaptive damping adjustment<br/>
                            Rear-axle steering<br/>
                            Driver Assistance SystemsDisclaimer[8]
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{marginLeft: '20px'}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography
                            color="rgba(35, 149, 241)"
                            fontWeight='bold'
                            variant="h3"
                            px={3}
                        >
                            Design
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails px={3}>
                        <Typography
                            color="black"
                            fontWeight='bold'
                            fontFamily='aria'
                            variant="h5"
                            px={3}
                        >
                            Mercedes-Benz User Experience (MBUX) with Voice Control multimedia system based on artificial intelligence, with AMG-specific functions<br/>
                            AMG steering wheel with Touch Control buttons<br/>
                            Up to 20” AMG design wheels available<br/>
                            11.9” LCD central touchscreen multimedia display and 12.3” Digital Instrument Cluster<br/>
                            64-color ambient lighting and AMG illuminated door sills<br/>
                            Available AMG Carbon Fiber Package, AMG Night Package I and II, AMG Performance Studio Package, AMG Performance Seat Package
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <br/>
                <Grid container item xs={12} lg={12} md={12}>
                    <Grid  item xs={12} lg={12} md={12}>
                    <MKTypography
                        color="info"
                        fontWeight='bold'
                        variant="h2"
                        px={4}
                        textGradient
                        >
                        Status
                    </MKTypography>
                    </Grid>
                    <Grid container item xs={12} lg={12} md={12}>
                        <Grid item xs={12} lg={4} md={4}>
                            <MKTypography variant="h1" component="p" color="text" px={4}>
                                <AuctionCountdown timeEnd={auctionTime} />
                            </MKTypography>
                        </Grid>
                        <Grid item xs={12} lg={4} md={4} display="flex" sx={{paddingLeft: '60px'}}>
                            <DefaultCounterCard
                                count={auctionPrice}
                                title="Prices($)"
                                description={auctionPrice}
                                px={4}
                            />
                        </Grid>
                        <Grid item xs={12} lg={4} md={4}>
                            <DefaultCounterCard
                                count={auctionPeople}
                                title="Bids counts"
                                description={auctionPeople}
                                px={4}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={12} lg={12} md={12}>
                    <Grid item xs={12} lg={6} md={6}>
                        <MKTypography
                            color="info"
                            fontWeight='bold'
                            variant="h4"
                            px={4}
                            mb={1}
                            textGradient
                        >
                            Last Price : {auctionPrice}
                        </MKTypography>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6}>
                        <MKTypography
                            color="info"
                            fontWeight='bold'
                            variant="h4"
                            px={4}
                            mb={1}
                            textGradient
                        >
                            Last Bidder : {bidders.length === 0?'None':bidders[bidders.length - 1].Email}
                        </MKTypography>
                    </Grid>
                </Grid>
                <br/>
                
                <Grid container item xs={12} lg={12} md={12}>
                    <Grid container item xs={12} lg={12} md={12}>
                    <MKTypography
                        color="info"
                        fontWeight='bold'
                        variant="h2"
                        px={4}
                        mb={1}
                        textGradient
                    >
                        Place Bid
                    </MKTypography>
                    </Grid>
                    <Grid container item xs={12} lg={12} md={12} px={2}>
                        <Grid item xs={12} lg={7} md={7} sx={{marginRight: '15px'}}>
                            <MKInput type="price" label="Price" fullWidth onChange={handleSetPrice} px={3} mar/>
                        </Grid>
                        <Grid item xs={12} lg={4} md={4}>
                            {enableButton? 
                            <div> 
                            <MKButton variant="gradient" color="info" fullWidth onClick={onClickPlaceBid} px={2} sx={{flow: 'right', marginRight: '10px'}}>
                                Place bid
                            </MKButton></div>: 
                            <div><MKButton variant="gradient" color="info" fullWidth onClick={onClickPlaceBid} px={10} disabled>
                                Place bid
                            </MKButton></div>}
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid container item xs={12} lg={12} md={12} px={2} sx={{padding: '20px'}}>
                        <Typography variant="h4" color="rgba(35, 149, 241)" sx={{mt: '12px'}}>All bids</Typography><br/>
                        <Grid container spacing={4}>
                            <Grid item xs={3} sm={3}>
                                <Typography variant="subtitle1" color="rgba(35, 149, 241)">Bid ID</Typography>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <Typography variant="subtitle1" color="rgba(35, 149, 241)">Bid Time</Typography>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <Typography variant="subtitle1" color="rgba(35, 149, 241)">Bidder</Typography>
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <Typography variant="subtitle1" color="rgba(35, 149, 241)">BidPrice</Typography>
                            </Grid>
                        </Grid> 
                        {bidders.map((item, index) => {
                        return <Grid container spacing={4} key={index}>
                            <Grid item xs={5} sm={3}><Typography variant="body2" color="rgba(255,255,255,1)">{index + 1}</Typography></Grid>
                            <Grid item xs={3} sm={4}><Typography variant="body2" color="rgba(255,255,255,1)">{new Date(item.bidtime).toLocaleString()}</Typography></Grid>
                            <Grid item xs={2} sm={3}><Typography variant="body2" color="rgba(255,255,255,1)">{item.Email}</Typography></Grid>
                            <Grid item xs={2} sm={2}><Typography variant="body2" color="rgba(255,255,255,1)">${item.bidPrice}</Typography></Grid>
                        </Grid>
                    })}
                    </Grid>    
                </Grid>
            </Grid>
        </Grid>
    </Card>
    <Modal open={completeAuction} sx={{ display: "grid", placeItems: "center" }}>
        <Slide direction="down" in={completeAuction} timeout={500}>
            <MKBox
              position="relative"
              width="500px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
            >
              <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">Completed Auction</MKTypography>
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <MKBox p={2}>
                <MKTypography variant="h2" color="secondary" fontWeight="regular">
                  Congratulations!
                </MKTypography>
                <MKTypography variant="body2" color="secondary" fontWeight="regular">
                  Hi! {userName}<br/>
                  You won this auction.
                    At this auction, for the price of {auctionPrice} dollars, you won.<br/>
                    congratulations!. Would you like to continue participating in the auction?
                </MKTypography>
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <MKBox display="flex" justifyContent="space-between" p={1.5}>
                <MKButton variant="gradient" color="info" onClick={onClickOkBtn}>
                  Okay
                </MKButton>
              </MKBox>
            </MKBox>
        </Slide>
    </Modal>
    </>
  );
}

export default Auction;