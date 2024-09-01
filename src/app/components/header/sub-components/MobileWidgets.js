import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaRegEnvelope,
  FaLinkedinIn
  
} from "react-icons/fa";

const MobileWidgets = ({ styles }) => {
  return (
    <div className={styles.offcanvasWidgetArea} >
      <div className={styles.offCanvasContactWidget}>
        <div className={styles.headerContactInfo}>
          <ul className={styles.headerContactInfoList}>
            <li>
              <FaPhone /> <a href="tel://+1 855 388 9955">+1 855 388 9955 </a>
            </li>
            <li>
              <FaRegEnvelope />{" "}
              <a href="mailto:info@ybesanz.com">info@besanz.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className={styles.offCanvasWidgetSocial}>
        <a
          href="https://www.linkedin.com/company/besanzofficial/"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
        >
          
          <FaLinkedinIn className="socialicon" />
        </a>
        <a
          href="https://twitter.com/besanzofficial"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          
          <FaTwitter className="socialicon" />
        </a>
        <a
          href="https://www.facebook.com/besanzofficial"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FaFacebookF className="socialicon" />
        </a>
        <a
          href="https://instagram.com/besanzofficial"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram className="socialicon" />
        </a>
        
        {/* <a
          href="//pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Pinterest"
        >
          <FaPinterestP />
        </a> */}
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;
