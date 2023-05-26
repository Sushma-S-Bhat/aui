import { JobStatusAvatar } from "./JobStatusAvatar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Common/JobStatusAvatar",
  component: JobStatusAvatar,
};
export const Viewed = {
  args: {
    status: "Viewed",
  },
};
export const InterViewed = {
  args: {
    status: "Interviewed",
  },
};
export const Offered = {
  args: {
    status: "Offered",
  },
};
export const Applied = {
  args: {
    status: "Applied",
  },
};
export const Declined = {
  args: {
    status: "Declined",
  },
};
export const Wishlist = {
  args: {
    status: "Wishlist",
  },
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
