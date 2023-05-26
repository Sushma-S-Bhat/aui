import { Card, Typography, Stack, Button } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";

export const ActionCard = ({
  cardHeader,
  hasBtn,
  btnText,
  cardContent,
  cardImage,
  ...props
}) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        transition:'0.5s all ease',
        "&:hover": {
          transform: "scale(1.05)",
          backgroundColor: "card.main.hover.background",
          borderColor: "card.main.hover.border",
        },
        '&:hover .cardBtn': {
            bgcolor: 'card.main.hover.buttonbackground',
            color:'card.main.hover.buttontext'
          }
      }}
    >
      <Stack gap={1.5}>
        <Image
          src={"https://app.aglinthq.com/_next/image?url=%2Fimages%2Ftoolbox%2Finterview.svg&w=3840&q=75"}
          height="200"
          width="200"
          alt={cardHeader}
        ></Image>
        <Typography variant="h6">{cardHeader}</Typography>

        <Typography variant="body2">{cardContent}</Typography>

        {hasBtn && (
          <Button size="medium" className="cardBtn" variant="filled" sx={{ alignSelf: "flex-end" }}>
            {btnText}
          </Button>
        )}
      </Stack>
    </Card>
  );
};
ActionCard.propTypes = {
  btnText: PropTypes.string,
  cardContent: PropTypes.string,
  hasBtn: PropTypes.bool,
  cardImage: PropTypes.string,
  cardHeader: PropTypes.string,
};

ActionCard.defaultProps = {
  cardHeader: "Hello",
  cardContent:
    "Welcome to Aglint and make your career transitions smooth and painless with our AI tools that eases all your works and efforts and helps you build your career",
  hasBtn: "true",
  cardImage:
    "https://app.aglinthq.com/_next/image?url=%2Fimages%2Ftoolbox%2Finterview.svg&w=3840&q=75",
  btnText: "Let's begin",
};
