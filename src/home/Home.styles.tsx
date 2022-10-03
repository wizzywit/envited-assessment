import styled from "styled-components";
import { Box, Button, Typography } from "@mui/material";

export const Root = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 60,
  marginBottom: 30,
  height: "100%",
});

export const GradientH1Text = styled(Typography)({
  background: "linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const LandingIcon = styled.img({
  width: 165,
  height: 292,
  objectFit: "contain",
  "@media (min-width:600px)": {
    width: 311,
    height: 550,
  },
});

export const GradientButton = styled(Button)({
  background: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
});
