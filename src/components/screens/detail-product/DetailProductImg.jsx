import { Box, Grid, styled, useMediaQuery } from "@mui/material";
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

function DetailProductImg({ data }) {
  const isMoblie = useMediaQuery("(max-width:600px)");

  const [listImg, setListImge] = useState([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const newData = data?.filter(Boolean);
    setListImge(newData);
  }, [data]);

  useEffect(() => {
    setActive(listImg?.[0]);
  }, [listImg]);

  return (
    <Box>
      <Grid
        container
        direction={{ xs: "column-reverse", sm: "row" }}
        spacing={1}
      >
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            maxWidth: {
              xs: "90vw !important",
              sm: "none",
              overflowX: "scroll",
            },
          }}
        >
          <Box
            sx={{
              maxHeight: "100%",
              maxWidth: "100%",
              cursor: "pointer",
            }}
            display={"flex"}
            gap={1}
            width={"100%"}
            flexDirection={{ xs: "row", sm: "column" }}
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
        <Grid item xs={12} sm={9}>
          {isMoblie ? (
            <Box
              component={"img"}
              display={"block"}
              width={"100vw"}
              src={active}
              sx={{ objectFit: "contain" }}
            />
          ) : (
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
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default DetailProductImg;
