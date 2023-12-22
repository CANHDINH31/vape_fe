import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Box, Typography, styled } from "@mui/material";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwipperCustom = styled(Swiper)({
  "&.swiper": {
    paddingBottom: 100,
  },

  "& .swiper-pagination-bullet-active": {
    width: "1rem !important",
    height: "1rem !important",
    background: "white !important",
    border: "1px solid white !important",
    margin: "0 0.3rem !important",
  },

  "& .swiper-pagination-bullet": {
    width: "0.8rem",
    height: "0.8rem",
    background: "rgba(0,0,0,0)",
    border: "1px solid white",
    opacity: "1 !important",
    margin: "0 0.3rem !important",
  },
});

function Flavor() {
  return (
    <Box
      height={"90vh"}
      paddingY={"4rem"}
      sx={{ background: "linear-gradient(to bottom,#696969,#010101)" }}
    >
      <Typography
        textAlign={"center"}
        color={"white"}
        fontSize={"3.5rem"}
        lineHeight={1}
        fontWeight={"bold"}
        data-aos="fade-up"
      >
        10 FLAVORS
      </Typography>
      <Typography
        color={"white"}
        textAlign={"center"}
        lineHeight={2}
        fontSize={20}
        fontWeight={500}
        data-aos="fade-up"
      >
        Your Flavor, Your Rules.
      </Typography>
      <Box mt={8}>
        <SwipperCustom
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Box
              component={"img"}
              src={"/img/FV1.webp"}
              width={360}
              sx={{ objectFit: "contain" }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component={"img"}
              src={"/img/FV2.webp"}
              width={360}
              sx={{ objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={"/img/FV3.webp"}
              width={360}
              sx={{ objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={"/img/FV4.webp"}
              width={360}
              sx={{ objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={"/img/FV5.webp"}
              width={360}
              sx={{ objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={"/img/FV6.webp"}
              width={360}
              sx={{ objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={"/img/FV7.webp"}
              width={360}
              sx={{ objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={"/img/FV8.webp"}
              width={360}
              sx={{ objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={"/img/FV9.webp"}
              width={360}
              sx={{ objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={"/img/FV10.webp"}
              width={360}
              sx={{ objectFit: "contain" }}
            />
          </SwiperSlide>
        </SwipperCustom>
      </Box>
    </Box>
  );
}

export default Flavor;
