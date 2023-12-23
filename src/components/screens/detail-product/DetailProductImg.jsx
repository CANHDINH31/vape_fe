import { Box, Grid, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";

const MoreImg = styled(Box)({
  display: "block",
  width: 100,
  height: 100,
  objectFit: "cover",
  border: "1px solid rgba(0,0,0,.3)",
  "&.active": {
    borderColor: "red",
  },
});

function DetailProductImg() {
  const listImg = [
    "/img/Product3.webp",
    "/img/DP1.webp",
    "/img/DP2.webp",
    "/img/DP3.webp",
  ];
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(listImg[0]);
  }, []);

  return (
    <Box>
      <Grid container>
        <Grid item xs={3}>
          <Box
            sx={{
              cursor: "pointer",
              overflowX: "scroll",
            }}
            display={"flex"}
            gap={1}
            width={"100%"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            {listImg?.map((img, index) => (
              <MoreImg
                component={"img"}
                src={img}
                key={index}
                className={img === active ? "active" : ""}
                onClick={() => setActive(img)}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={9}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "",
                isFluidWidth: true,
                src: active,
              },
              largeImage: {
                src: active,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DetailProductImg;
