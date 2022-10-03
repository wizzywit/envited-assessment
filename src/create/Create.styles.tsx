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
