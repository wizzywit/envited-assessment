import { Box, Typography } from "@mui/material";
import { MdArrowForwardIos } from "react-icons/md";

interface OwnProps {
  label: string;
  content: string;
  isDate?: boolean;
  timezone?: string;
}
export const EventDetailCardComponent = (props: OwnProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="90%"
    >
      <Box display="flex" flexDirection="column">
        <Typography variant="h6">{props.label}</Typography>
        {props.isDate ? (
          <Typography color="neutral.neutral1" variant="subtitle1">
            to{" "}
            <Typography variant="subtitle1" fontWeight="bold" component="span">
              {props.content}
            </Typography>{" "}
            UTC +10
          </Typography>
        ) : (
          <Typography color="neutral.neutral1" variant="subtitle1">
            {props.content}
          </Typography>
        )}
      </Box>
      <Typography color="neutral.neutral6" fontSize={20}>
        <MdArrowForwardIos color="inherit" />
      </Typography>
    </Box>
  );
};

export default EventDetailCardComponent;
