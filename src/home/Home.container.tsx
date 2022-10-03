import * as StyledComponents from "./Home.styles";
import { Box, Typography } from "@mui/material";
import landingIcon from "../assets/landing-page.png";

const HomeContainer = () => {
  return (
    <StyledComponents.Root>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h1" textAlign="center">
          Imagine if <br />
          <StyledComponents.GradientH1Text variant="h1">
            Snapchat
          </StyledComponents.GradientH1Text>{" "}
          had events.
        </Typography>
        <Typography
          variant="subtitle1"
          color="neutral.neutral1"
          textAlign="center"
        >
          Easily host and share events with your friends
          <br /> across any social media.
        </Typography>
        <StyledComponents.LandingIcon src={landingIcon} alt="landing icon" />
        <StyledComponents.GradientButton variant="contained">
          🎉 Create my event
        </StyledComponents.GradientButton>
      </Box>
    </StyledComponents.Root>
  );
};

export default HomeContainer;
