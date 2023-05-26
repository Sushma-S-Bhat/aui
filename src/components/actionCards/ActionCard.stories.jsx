import { ActionCard } from "./ActionCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Common/ActionCard",
  component: ActionCard,
};
export const WithButton = {
  args: {
    hasBtn: true,
  },
};
export const WithoutButton = {
    args: {
      hasBtn: false,
    },
  };
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
