import PropTypes from "prop-types";
import React from "react";

import styles from "./Button.module.scss";
import Link from "next/link";


const Button = ({ type, url, text, onClick, btnStyle, customStyle }) => {
  if (type === "link") {
    return (
      <Link 
      // href={process.env.PUBLIC_URL + url}
      href={url}
      style={customStyle && customStyle }  
          className={`${styles.voopoBtn} 
          ${
            btnStyle === "white" ? styles.voopoBtnWhite : ""
          } ${btnStyle === "light" ? styles.voopoBtnLight : ""}`}>
          {text}
      </Link>
    );
  }
  if (type === "button") {
    return (
      <button
        onClick={onClick? onClick : ()=>{}}
  className={`${styles.voopoBtn} 
      
       ${
          btnStyle === "white" ? styles.voopoBtnWhite : ""
        } ${btnStyle === "light" ? styles.voopoBtnLight : ""}`}
        style={customStyle && customStyle }
      >
        {text}
      </button>
    );
  }
  return "";
};

Button.propTypes = {
  btnStyle: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string
};

export default Button;
