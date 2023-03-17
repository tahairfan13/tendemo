import { LISTDATA } from '../mockList';
import { Offer } from './Offer';
import React from 'react';

function OffersList() {
  return (<><h1>Projects</h1>
  
  <pre>{JSON.stringify(LISTDATA, null, ' ')}</pre>
        <Offer first="Srini" last="Kata" />
  
  </>)
}

export default OffersList;