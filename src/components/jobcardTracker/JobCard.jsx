import { Card, Typography, Stack, Button } from "@mui/material";
import PropTypes from "prop-types";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

export const JobCard = ({
  variant,
  jobtitle,
  jobLocation,
  company,
  ...props
}) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <Card variant="outlined" sx={{ p: 2 }}>
      <Stack gap={variant=="square"?5:1.5}>
        <Stack gap={1.5}>
          <Typography variant="h6">{jobtitle}</Typography>
          <Stack direction={"row"}>
            <Typography variant="body2">{company}</Typography>
            <Typography variant="body2">{jobLocation}</Typography>
          </Stack>
        </Stack>
        
        <Button
          size="medium"
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
        >
          Add to Tracker
        </Button>
      </Stack>
    </Card>
  );
};
JobCard.propTypes = {
  variant: PropTypes.oneOf(["square", "rectangular"]),
  text: PropTypes.string,
};

JobCard.defaultProps = {
  variant: "square",
  text: "hello",
  jobtitle: "Software Engineer",
  company: "Google",
  jobLocation: "San Francisco,US",
};
