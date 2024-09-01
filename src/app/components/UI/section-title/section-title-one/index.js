import PropTypes from "prop-types";
import React from "react";
import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ title, text, textAlign }) => {
  return (
    <div className={`${textAlign === "left" ? "text-left" : "text-center"} ${styles.sectionTitle}`}>
      <h2>{title}</h2>
      {text ? <h3>{text}</h3> : ""}
    </div>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
  textAlign: PropTypes.string,
  title: PropTypes.string
};

export default SectionTitle;
