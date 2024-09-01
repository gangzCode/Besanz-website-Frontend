"use client"

import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button'
import PricingTableOne from "../../containers/pricing-tables/pricing-table-one";
import {annualPriceData, monthlyPriceData} from "../../data/pricing-tables/pricedata.js";
import './priceSelector.css'

const PriceSelector = () => {

  const [active, setActive] = useState("annual");

  return (
  <div>
    <div align='center' >
      <Button onClick={()=> setActive("annual")} className={active === "annual"?"tab active-tab":"tab"} >
          Annual Plan
        </Button>
    
      <Button onClick={()=> setActive("monthly")} className={active === "monthly"?"tab active-tab":"tab"}>
          Monthly Plan
        </Button>
    
    </div>
    <div>
      {active === "annual" && <PricingTableOne background="none" type={"annual"} data={annualPriceData.en} /> }
   
      {active === "monthly" &&<PricingTableOne background="none" type={"monthly"} data={monthlyPriceData.en} /> }
    </div>
  </div>
  );
};

export default PriceSelector;
