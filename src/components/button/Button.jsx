import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';

/**
 * Primary UI component for user interaction
 */
export const AuiButton = ({ variant='contained', color, size, label, ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <MuiButton variant={variant} size={size} color={color} >{label}</MuiButton>
  );
};

AuiButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

AuiButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
