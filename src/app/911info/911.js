import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";

import PrivacyContent from "../containers/terms-and-conditions/TermsAndConditionContent";
import NineOneOneContent from "../containers/911";
import render911Template from "../data/911/911.template";

const NineOneOne = () => {

  return (
    <Fragment>
      <LayoutOne>
        
        <Breadcrumb title="911" />
     
        <NineOneOneContent>
          {/* <p>heelooo</p> */}
              {/* <PrivacyContent/>  */}
              {/* {render911Template} */}
        </NineOneOneContent>

      </LayoutOne>
    </Fragment>
  );
};

export default NineOneOne;
