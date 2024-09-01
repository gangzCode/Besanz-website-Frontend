"use client"

import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import PriceComparison from "../containers/pricecomparison";
import Breadcrumb from "../components/UI/breadcrumb";

const Comparison = () => {
  
  return (
    <Fragment>
      <LayoutOne>

        {/* breadcrumb */}
        <Breadcrumb title="Price Comparison" />

        <PriceComparison />
        
      </LayoutOne>
    </Fragment>
  );
};

export default Comparison;
