import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import NotFoundContent from "../containers/not-found";
import Breadcrumb from "../components/UI/breadcrumb";

const NotFound = () => {
  return (
    <Fragment>
      <LayoutOne>

        {/* breadcrumb */}
        <Breadcrumb title="Not Found" />

        <NotFoundContent />
        
      </LayoutOne>
    </Fragment>
  );
};

export default NotFound;
