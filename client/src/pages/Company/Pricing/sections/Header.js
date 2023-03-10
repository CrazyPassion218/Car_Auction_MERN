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

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

// Pricing page components
import SliderHeader from "pages/Company/Pricing/components/Header";

// Images
import bg1 from "assets/images/car/car.jpg";
import bg2 from "assets/images/car/car5.jpg";
import bg3 from "assets/images/car/car2.jpg";

function Header() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  return (
    <Swiper
      autoplay={{ delay: 5000 }}
      speed={800}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop
    >
      <SwiperSlide>
        <SliderHeader
          image={bg1}
          label="About our company"
          title="The best Car service for all buyers in the world"
          description="iAuto offers new and used vehicles as well as parts for fixing, updating, and maintaining your existing vehicle."
          cards={[
            {
              variant: "gradient",
              color: "info",
              icon: "commute",
              title: "Car service",
              description:
                "We offer new and used vehicles as well as parts for fixing, updating, and maintaining your existing vehicle.",
            },
            {
              variant: "contained",
              color: "info",
              icon: "gavel",
              title: "Auction room",
              description:
                "Free companyies and people can make free bids. Anyone can win in the auction. Don't miss your chance to succeed.",
            },
            {
              variant: "contained",
              color: "info",
              icon: "store",
              title: "Car shopping",
              description:
                "This site offers all types of vehicles such as cars, trucks, classic cars, motorcycles, industrial vehicles and so on.",
            },
          ]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderHeader
          image={bg2}
          label="About our company"
          title="The best Online car auction service in the world"
          description="Free companyies and people can make free bids. Anyone can win in the auction. Don't miss your chance to succeed."
          cards={[
            {
              variant: "contained",
              color: "primary",
              icon: "timer",
              title: "Auction room creation and reservation",
              description:
                "The companies and individual sellers can create and reservate the acution with their cars at any time.",
            },
            {
              variant: "gradient",
              color: "primary",
              icon: "gavel",
              title: "Manual or Automatic biddng",
              description:
                "The bidders can bid with manual or automatical method until the reservation time is over along their strategies",
            },
            {
              variant: "contained",
              color: "primary",
              icon: "chat",
              title: "Online chat between winner and seller",
              description:
                "Once the reservation time is over, winner can discuss about their requirements via chat room in this site.",
            },
          ]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderHeader
          image={bg3}
          label="About our company"
          title="The best Online Car shopping service"
          description="Feel comfortable in this shop. Please come here and choose your favourite cars."
          cards={[
            {
              variant: "contained",
              color: "error",
              icon: "search",
              title: "Searching the vehicles",
              description:
                "The customers can search their favorite vehicles in this site. There are all kinds of vehicles, from cheap to expensive.",
            },
            {
              variant: "contained",
              color: "error",
              icon: "forum",
              title: "Free discussion via online chat",
              description:
                "The customers and sellers chat online to reach their agreement. This site offer the wonderful chat environment and they can use it freely.",
            },
            {
              variant: "gradient",
              color: "error",
              icon: "approval",
              title: "Brave web browser",
              description:
                "The customers and sellers execute their trades. If you have any problems, please feel free to contact us.",
            },
          ]}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Header;
