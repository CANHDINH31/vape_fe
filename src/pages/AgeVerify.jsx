import { Box, styled, keyframes, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const moiveAnimation = keyframes`
  0%, 100% {
    background-size: 130vw 130vh,120vw 120vh,100vw 150vh,120vw 130vh;
    background-position: -60vw -60vh,30vw -20vh,-20vw 20vh,30vw 20vh;
    }
    25% {
    background-size: 120vw 120vh,100vw 100vh,130vw 120vh,100vw 110vh;
    background-position: -50vw -50vh,-40vw -10vh,30vw -40vh,10vw 20vh;
    }
    50% {
    background-size: 130vw 130vh,140vw 100vh,100vw 150vh,90vw 110vh;
    background-position: 10vw -60vh,20vw 10vh,-20vw -30vh,10vw -20vh;
    }   
    75% {
    background-size: 140vw 140vh,100vw 130vh,100vw 150vh,130vw 110vh;
    background-position: -70vw -70vh,20vw 10vh,30vw -20vh,20vw -30vh;
    }
`;

const Wrapper = styled(Box)({
  backgroundImage:
    "radial-gradient(closest-side,rgb(0,0,0),rgba(15,36,40,0)),radial-gradient(closest-side,rgb(255,0,0),rgba(15,36,40,0)),radial-gradient(closest-side,rgb(0,0,0),rgba(15,36,40,0))",
  backgroundColor: "#000",
  backgroundSize: "130vw 130vh,120vw 120vh,100vw 150vh,120vw 130vh",
  backgroundPosition: "-60vw -60vh,30vw -20vh,-20vw 20vh,30vw 20vh",
  backgroundRepeat: "no-repeat",
  zIndex: 999,
  animation: `15s ${moiveAnimation} infinite`,
  position: "fixed",
  height: "100vh",
  top: 0,
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ButtonCustom = styled("button")({
  background: "rgba(0, 0, 0, 0)",
  border: "1px solid white",
  color: "white",
  borderRadius: "3rem",
  padding: "14px 40px",

  "&:hover": {
    background: "black",
    border: "1px solid black",
    color: "red",
  },
});

function AgeVerify() {
  const navigate = useNavigate();

  useEffect(() => {
    const isVerifyAge = sessionStorage.getItem("verifyAge");
    if (isVerifyAge) {
      navigate("/");
    }
  }, []);

  return (
    <Wrapper>
      <Box textAlign={"center"}>
        <Typography color={"white"} fontSize={28} fontWeight={700}>
          AGE VERIFICATION
        </Typography>
        <Typography color={"white"} fontSize={12} mt={4}>
          To use the OXVA website you must be at least 21 years old or above.
          <br />
          Please verify your age before entering the site.
        </Typography>
        <Box mt={4} display={"flex"} gap={2} justifyContent={"center"}>
          <ButtonCustom onClick={() => navigate("/about:blank")}>
            Under 21
          </ButtonCustom>
          <ButtonCustom
            onClick={() => {
              sessionStorage.setItem("verifyAge", 1);
              navigate("/");
            }}
          >
            I am 21+
          </ButtonCustom>
        </Box>
        <Typography color={"white"} fontSize={12} mt={4}>
          WARNING: This product contains nicotine. Nicotine is an addictive
          chemical.
        </Typography>
      </Box>
    </Wrapper>
  );
}

export default AgeVerify;
