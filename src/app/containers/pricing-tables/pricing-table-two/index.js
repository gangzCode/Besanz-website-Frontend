import PropTypes from "prop-types";
import React from "react";
import SectionTitle from "@/app/components/UI/section-title/section-title-one";
import PricingTableOneSingle from "@/app/components/pricing-tables/pricing-table-one/index.js";
import styles from "./PricingTableOne.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const bgImg = "/assets/images/bg/1.jpg";
const PricingTableOne = ({ background, data, type }) => {
  return (
    <div
      className="voopo__picing__area pt--50 pb--120 bgImg"
      style={
        background === "none"
          ? { background: `none` }
          : { backgroundImage: `url(${bgImg})` }
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle title="Our Subscription Plans" text={`${type === "annual" ? "Save with Annual Plans" : "Have the FLex with Monthly Plans"} `} />
          </div>
        </div>
        <div className="row mt--30">

          <Container>
            <Row className="justify-content-md-center">
              {
                data?.map((single, key) => (
                  <Col key={key} xs={12} md={6} lg={4} xl={3}>
                    <PricingTableOneSingle
                      data={single}
                      key={key}
                      type={type}
                      styles={styles}
                    />
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

PricingTableOne.propTypes = {
  background: PropTypes.string,
};

export default PricingTableOne;
