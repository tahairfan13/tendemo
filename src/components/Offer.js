import { Card, CardCover, Chip, Typography } from "@mui/joy";
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
      orientation="vertical"
      variant="outlined"
      key={props.position}
      sx={{
        minHeight: "60px",
        width: "400px",
        height: "400px",
        padding: "0",
        alignItems: "center",
      }}
    >
      <CardCover>
        <img
          src={props.image_data.url}
          height={props.image_data.height}
          width={props.image_data.width}
          alt={props.title}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent
        sx={{
          justifyContent: "flex-end",
          paddingInline: "8%",
          paddingBottom: "3%",
          gap: "5px",
        }}
      >
        <Box>
          <Typography level="h2" fontSize="lg" textColor="common.white">
            {truncateText(props.title)}
          </Typography>
        </Box>{" "}
        <Typography
          level="h2"
          fontSize="xxl"
          mb={0.5}
          sx={{ color: "#4BB543" }}
        >
          <Typography
            level="h2"
            fontSize="md"
            sx={{ opacity: 0.75 }}
            textColor={"common.white"}
          >
            about{" "}
          </Typography>{" "}
          {bestPriceFormatted(props.price).symbol}{" "}
          {bestPriceFormatted(props.price).price}
        </Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 1,
          textAlign: "center",
          fontSize: "md",
          // px: 2,
          fontWeight: "md",
          paddingBlock: "10px",
          letterSpacing: "1px",
          width: "100%",
        }}
      >
        <Typography sx={{ textTransform: "uppercase" }}>get it now</Typography>
        <Typography sx={{ opacity: "0.7" }} fontSize="xs" fontWeight="400">
          amazon
        </Typography>
      </CardOverflow>
      {/* <CardContent sx={{ px: 2 }}>
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
      <Divider /> */}
      {/* <Box>
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
      </Box> */}
    </Card>
  );
}
