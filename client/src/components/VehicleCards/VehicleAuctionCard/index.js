import PropTypes from "prop-types";
import PaidIcon from "@mui/icons-material/Paid";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import VehicleCard from "../VehicleCard";
import AuctionCountdown from "./AuctionCountdown";
import MKBadge from "../../MKBadge";


function VehicleAuctionCard({
  image,
  now,
  title,
  timeData,
  topBidPrice,
  allBidCount,
  vehicleInfo,
  action,
}) {
  const [timeNow, setTimeNow] = [now]
  const { timeStart, timeEnd } = timeData;
  const description = (
    <>
    { new Date(timeStart) > timeNow && <MKBadge sx={{fontSize: '14px', color: 'red'}}>Start in {timeStart.split('.')[0]}</MKBadge>}
    { new Date(timeStart) < timeNow && <AuctionCountdown timeStart={timeStart} timeEnd={timeEnd} />}
      <MKBadge
        badgeContent={
          <>
            <PaidIcon />
            &nbsp;{topBidPrice}
          </>
        }
        color="light"
        container
      />
      <MKBadge
        badgeContent={
          <>
            <PeopleAltIcon />
            &nbsp;{allBidCount}
          </>
        }
        color="light"
        container
      />
    </>
  );
  return (
    <VehicleCard
      image={image}
      title={title}
      description={description}
      timeData={timeData}
      vehicleInfo={vehicleInfo}
      action={action}
    />
  );
}

VehicleAuctionCard.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  vehicleInfo: PropTypes.shape({
    miles: PropTypes.number,
    fuel: PropTypes.string,
    transmission: PropTypes.oneOf(["Manual", "Automatic"]),
  }).isRequired,
  timeData: PropTypes.shape({
    timeStart: PropTypes.string,
    timeEnd: PropTypes.string,
  }).isRequired,
  topBidPrice: PropTypes.number,
  allBidCount: PropTypes.number,
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

export default VehicleAuctionCard;
