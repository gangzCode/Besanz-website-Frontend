import PropTypes from "prop-types";
import React from "react";
import Button from "../../UI/button";

const PricingTableFourSingle = ({ data, styles }) => {
  return (
    <div
     //className="col-3 col-sm-3 col-lg-3"
     >
      <div
        className={`${styles.pricing} ${data.featured ? styles.active : ""}`}
      >
        <div className={styles.content}>
          <span>{data.planName}</span>
          <div className={styles.price}>
            <p>
              <sup>{data.planPriceCurrency}</sup> {data.planPrice}{" "}
              <sub>{data.planPriceDuration}</sub>
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.planFeatures }} />
          <div className="price__btn">
            <Button
              type="link"
              url="/price-comparison"
              text="Compare"
              btnStyle={data.featured ? "" : "light"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PricingTableFourSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default PricingTableFourSingle;
