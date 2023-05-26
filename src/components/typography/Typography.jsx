import { Typography as MuiTypography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export const Typography = ({ variant,text, component, ...props }) => {
  return <MuiTypography variant={variant} component={component}>{text}</MuiTypography>;
};

Typography.propTypes = {
  variant: PropTypes.string,
  component: PropTypes.string,
  text:PropTypes.string
};

Typography.defaultProps = {
  variant: "body",
  component: "p",
  text:'typography'
};
