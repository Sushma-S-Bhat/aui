import { AuiChip } from './Chip';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Common/Chip',
  component: AuiChip,
 
};
export const Default = {
    args: {
      variant: 'filled',
      color:'default'
    },
  };
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Outlined = {
  args: {
    variant: 'outlined',
    color:'default'
  },
};
  export const Success = {
    args: {
      variant: 'filled',
      color:'success'
    },
  };
  export const Failure = {
    args: {
      variant: 'filled',
      color:'error'
    },
  };

  export const Big = {
    args: {
      variant: 'filled',
      color:'default',
      size:'medium'
    },
  };
  export const Icon = {
    args: {
      variant: 'filled',
      color:'default',
      size:'medium',
      icon:<AutoAwesomeIcon/>
    },
  };