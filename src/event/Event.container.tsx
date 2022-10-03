import * as StyledComponents from "./Event.styles";
import eventIcon from "../assets/event-image.png";
import { Box, Typography } from "@mui/material";
import { MdDateRange, MdOutlineLocationOn } from "react-icons/md";
import EventDetailCardComponent from "./Event.detailCard.component";

const EventContainer = () => {
  return (
    <StyledComponents.Root>
      <StyledComponents.EventIcon src={eventIcon} alt="event icon" />
      <Box p={1} width="100%">
        <Typography variant="h2" mb={1}>
          Birthday Bash
        </Typography>
        <Typography variant="subtitle1" color="neutral.neutral2">
          Hosted by{" "}
          <Typography variant="subtitle1" fontWeight="bold" component="span">
            Elysia
          </Typography>
        </Typography>
        <Box display="flex" flexDirection="column" gap={1} mt={5}>
          <Box display="flex" gap={2.5}>
            <StyledComponents.IconWrapper>
              <Typography color="primary.main" fontSize={20}>
                <MdDateRange color="inherit" />
              </Typography>
            </StyledComponents.IconWrapper>
            <EventDetailCardComponent
              isDate
              label="18 August 6:00PM"
              content="19 August 1:00PM"
            />
          </Box>
          <Box display="flex" gap={2.5}>
            <StyledComponents.IconWrapper>
              <Typography color="primary.main" fontSize={20}>
                <MdOutlineLocationOn color="inherit" />
              </Typography>
            </StyledComponents.IconWrapper>
            <EventDetailCardComponent
              label={"Street name"}
              content="Suburb, State, Postcode"
            />
          </Box>
        </Box>
      </Box>
    </StyledComponents.Root>
  );
};

export default EventContainer;
