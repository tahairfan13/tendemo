import { LISTDATA } from "../mockList";
import { Offer } from "./Offer";
import React from "react";
import Box from "@mui/joy/Box";
import { Card, Chip, Typography, Stack, Grid } from "@mui/joy";

// {
//     "outgoing_link": "https://www.amazon.com/exec/obidos/ASIN/B003TJHTIK/",
//     "image_data": {
//      "url": "https://dfe8fw3fyk4wz.cloudfront.net/images/5cd4100f97f81dd5.jpg",
//      "height": 320,
//      "width": 175
//     },

function OffersList() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.appBody",
          minHeight: "100dvh",
          width: "100vw",
          maxWidth: "100%",
          px: 2,
        }}
      >
        <Card variant="outlined" sx={{ mb: 2, mt: 2 }}>
          <Typography level="h1">{LISTDATA.title}</Typography>
        </Card>
        <Grid
          container
          spacing={2}
          sx={{ flexGrow: 1 }}
          gap={3}
          justifyContent="center"
        >
          {LISTDATA.offers.map((offer) => {
            return (
              <Offer
                key={offer.position}
                outgoing_link={offer.outgoing_link}
                image_data={offer.image_data}
                title={offer.title}
                position={offer.position}
                price={offer.price}
              />
            );
          })}
        </Grid>
        {/* <pre>{JSON.stringify(LISTDATA, null, " ")}</pre>
      <Offer first="Srini" last="Kata" /> */}
      </Box>
    </>
  );
}

export default OffersList;
