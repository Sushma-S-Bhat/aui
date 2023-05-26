import { Chip as MuiChip } from "@mui/material";
import PropTypes from 'prop-types';
import React from 'react'

export const AuiChip = ({ variant='filled', color, size, label,icon, ...props }) => {
    // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
      <MuiChip variant={variant} size={size} color={color} label={label} icon={icon}></MuiChip>
    );
  };
  
  AuiChip.propTypes = {
    variant: PropTypes.oneOf(['filled','outlined']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.string,
    onClick: PropTypes.func,
    label:PropTypes.string,
    icon:PropTypes.element
  };
  
  AuiChip.defaultProps = {
    variant:'filled',
    size: 'small',
    color: null,
    onClick: null,
    label:'Chip',
    icon:null
  };