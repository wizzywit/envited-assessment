import * as StyledComponents from "./Create.styles";
import eventIcon from "../assets/event-image.png";
import { Box, Typography } from "@mui/material";

const CreateContainer = () => {
  return (
    <StyledComponents.Root>
      <StyledComponents.EventIcon src={eventIcon} alt="event icon" />
      <Box p={1} width="100%">
        <Typography variant="h2" mb={1}>
          Create Event
        </Typography>
      </Box>
    </StyledComponents.Root>
  );
};

export default CreateContainer;
