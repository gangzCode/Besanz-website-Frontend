import PropTypes from "prop-types";
import React from "react";
import styles from "./Breadcrumb.module.scss";

const Breadcrumb = ({ title }) => {

  return (
    <div
      className={`${styles.prBreadcrumbArea} m-breadcrumb`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={`${styles.breadcrumbInner} text-left`}>
              <h1 className={`${styles.breadcrumbTitle} m-breadcrumbTitle`}>{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string
};

export default Breadcrumb;
