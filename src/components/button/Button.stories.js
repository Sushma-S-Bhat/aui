import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    args:{
      label:'Button'
    },
    parameters: {
      componentSource: {
        code: Button,
        language: 'javascript',
      }
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    variant: 'contained',
    label: 'Button'
  },
};

export const Secondary = {
  args: {
   variant:'outlined',
   label: 'Button'
  },
};
export const TextButton ={
  args:{
    variant:'text',
    label: 'Button'
  }
}

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
