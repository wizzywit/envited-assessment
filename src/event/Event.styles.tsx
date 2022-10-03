import styled from "styled-components";
import { Box } from "@mui/material";

export const Root = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
});

export const EventIcon = styled.img({
  width: "100%",
  objectFit: "contain",
  "@media (min-width:600px)": {
    width: 593,
    height: 593,
  },
});

export const IconWrapper = styled(Box)({
  height: 48,
  width: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
  backgroundColor: "white",
});
