import { Avatar } from "./Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Common/Avatar',
  component: Avatar,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Circular = {
  args: {
    variant: 'circular',
  },
};

export const Square = {
  args: {
   variant:'square',
  },
};
export const Rounded = {
    args: {
     variant:'rounded',
    },
  };
