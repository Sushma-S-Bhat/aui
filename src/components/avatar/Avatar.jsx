import { Avatar as MuiAvatar } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';


export const Avatar = ({ variant='circular', size, ...props }) => {
    // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
      <MuiAvatar variant={variant} size={size}></MuiAvatar>
    );
  };
  
  Avatar.propTypes = {
   
    variant: PropTypes.string,
  
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    
  };
  
  Avatar.defaultProps = {
    variant:'circular',
    size: 'medium',
  };
  