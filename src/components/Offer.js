import { Card, Chip, Typography } from "@mui/joy";
import Box from "@mui/joy/Box";
import AspectRatio from "@mui/joy/AspectRatio";

import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import React from "react";
import _ from "lodash";

const makeAspectRatio = (width, height) => {
  // console.log(width);
  // console.log(height);
  return width + "/" + height;
};
const bestPriceFormatted = (price) => {
  let roundedAsString = price.toString();
  //console.log(roundedAsString);

  if (roundedAsString.slice(-2) === ".5") {
    roundedAsString = roundedAsString.replace(".5", "½");
  }

  if (roundedAsString.slice(-2) === ".0") {
    roundedAsString = roundedAsString.replace(".0", "");
  }
  const hash = { symbol: "", price: "" };
  let symbol = "$";

  hash.symbol = symbol;
  hash.price = roundedAsString;
  // console.log(hash);
  return hash;
};

const truncateText = (text) => {
  // only do this when necessary, maybe do this with css instead?
  return _.truncate(text, {
    length: 50,
    separator: /,?\.* +/,
  });
};

export function Offer(props) {
  const aspectRatio = makeAspectRatio(
    props.image_data.width,
    props.image_data.height
  );
  // console.log(aspectRatio);

  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      key={props.position}
      sx={{ minHeight: "60px" }}
    >
      <CardOverflow>
        <AspectRatio
          ratio={aspectRatio}
          sx={{
            width: "42vw",
            maxWidth: props.image_data.width,
          }}
        >
          <img
            src={props.image_data.url}
            height={props.image_data.height}
            width={props.image_data.width}
            // src={
            //   "https://tenup.s3.us-east-1.amazonaws.com/images/1e6c1d2f18da9ab9.jpg"
            // }
            // srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"

            alt={props.title}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ px: 2 }}>
        <Typography
          level="h2"
          fontSize="xl"
          textColor="success.plainColor"
          mb={0.5}
        >
          <Typography level="h2" fontSize="xs" sx={{ mb: 0.5, opacity: 0.5 }}>
            about{" "}
          </Typography>{" "}
          {bestPriceFormatted(props.price).symbol}{" "}
          {bestPriceFormatted(props.price).price}
        </Typography>
        <Box>
          <Typography level="body2">{truncateText(props.title)}</Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 1,
          writingMode: "vertical-rl",
          textAlign: "center",
          fontSize: "md",
          // px: 2,
          fontWeight: "xl2",
          letterSpacing: "1px",
        }}
      >
        <Typography sx={{ textTransform: "uppercase" }}>get it now</Typography>
        <Chip
          color="neutral"
          disabled={false}
          onClick={function () {}}
          size="sm"
          variant="outlined"
        >
          amazon
        </Chip>
      </CardOverflow>
    </Card>
  );
}
