import { Typography } from "@mui/material";
import PropTypes from "prop-types";
const Notification = ({ title }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        maxWidth: "375px",
        fontWeight: 500,
        textAlign: "center",
        opacity: 0.7,
        px: 1,
        pt: 5,
      }}
    >
      {title}
    </Typography>
  );
};
Notification.propTypes = {
  title: PropTypes.string,
};

export default Notification;
