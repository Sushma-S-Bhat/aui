import { JobCard } from "./JobCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Common/JobCard",
  component: JobCard,
};
export const Square = {
  args: {
    variant: "square",
  },
};
export const Rectangular = {
    args: {
      variant: "rectangular",
    },
  };
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
