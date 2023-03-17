import { LISTDATA } from "../mockList";
import { Offer } from "./Offer";
import React from "react";

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
      <h1>{LISTDATA.title}</h1>
      {LISTDATA.offers.map((offer) => {
        return (
          <Offer
            outgoing_link={offer.outgoing_link}
            image_data={offer.image_data}
            title={offer.title}
            position={offer.position}
            price={offer.price}
          />
        );
      })}
      {/* <pre>{JSON.stringify(LISTDATA, null, " ")}</pre>
      <Offer first="Srini" last="Kata" /> */}
    </>
  );
}

export default OffersList;
