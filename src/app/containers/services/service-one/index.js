import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/UI/section-title/section-title-one";
import serviceData from "../../../data/services/service-one.json";
import ServiceOneSingle from "../../../components/services/service-one";
import styles from "./ServiceOne.module.scss";


const ServiceOne = ({ serviceSpacing }) => {

  return (

    <div className="voopo__picing__area pt--60 pb--60 bgImg">
      <div className="container">

        <div className="row">
          <div className="col-lg-12" style={{ marginBottom: 20 }}>
            {/* section title */}
            <SectionTitle title="AddOn" text="Features" />
          </div>
        </div>

        <div className="row mt--50">
          {serviceData && serviceData.map((single, key) => {
              return (
                <ServiceOneSingle data={single} key={key} styles={styles}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

ServiceOne.propTypes = {
  serviceSpacing: PropTypes.string
};

export default ServiceOne;
