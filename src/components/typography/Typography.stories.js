import { Typography } from "./Typography";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Common/Typography',
  component: Typography,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Heading1= {
  args: {
    variant: 'h1',
    component:'h1'
  },
};

export const Heading2 = {
  args: {
   variant: 'h2',
   component:'h2'
  },
};
export const Heading3 = {
    args: {
     variant: 'h3',
     component:'h3'
    },
  };
  export const Heading4 = {
    args: {
     variant: 'h4',
     component:'h4'
    },
  };
  export const Heading5 = {
    args: {
     variant: 'h5',
     component:'h5'
    },
  };

  export const Heading6 = {
    args: {
     variant: 'h6',
     component:'h6'
    },
  };

  export const SubtitleRegular = {
    args: {
     variant: 'subtitle',
     component:'p'
    },
  };
  export const Subtitle1 = {
    args: {
     variant: 'subtitle1',
     component:'p'
    },
  };
  export const Subtitle2 = {
    args: {
     variant: 'subtitle2',
     component:'p'
    },
  };
  export const Body1 = {
    args: {
     variant: 'body1',
     component:'p'
    },
  };
  export const Body2 = {
    args: {
     variant: 'body2',
     component:'p'
    },
  };
  export const Body3 = {
    args: {
     variant: 'body3',
     component:'p'
    },
  };
  export const Body4 = {
    args: {
     variant: 'body4',
     component:'p'
    },
  };
  export const Body5 = {
    args: {
     variant: 'body5',
     component:'p'
    },
  };