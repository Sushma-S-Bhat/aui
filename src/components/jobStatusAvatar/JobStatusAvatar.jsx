import { Avatar, Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

export const JobStatusAvatar = ({ status, logo, ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <Stack
      sx={{
        border: "1px solid #d8dcde",
        p: 0.5,
        position: "relative",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Avatar variant="rounded" sx={{ height: 50, width: 45 }} />
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          fontFamily: "SF Pro",
          fontSize:14,
          top: "auto",
          py: 0.25,
          px: 1,
          color: "#000",
          backgroundColor: "#cee2f2",
          ...(status === "Viewed" && {
            backgroundColor: "#f5f5f5",
          }),
          ...(status === "Offered" && {
            color: "#fff",
            backgroundColor: "#228f67",
          }),
          ...(status === "Declined" && {
            color: "#fff",
            backgroundColor: "#e71118",
          }),
        }}
      >
        {status}
      </Box>
    </Stack>
  );
};
JobStatusAvatar.propTypes = {
  status: PropTypes.oneOf([
    "Viewed",
    "Interviewed",
    "Offered",
    "Applied",
    "Declined",
    "Wishlist",
  ]),
  logo: PropTypes.string,
};

JobStatusAvatar.defaultProps = {
  status: "Viewed",
  logo: "https://app.aglinthq.com/_next/image?url=%2Fimages%2Ftoolbox%2Finterview.svg&w=3840&q=75",
};
