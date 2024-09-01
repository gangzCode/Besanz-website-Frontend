import React from "react";
// import LocationMap from "../../../components/contact/contact-map";
import styles from "./ContactMap.module.scss";

const ContactMap = () => {

  return (
    <div className={`${styles.voopoAddress} bg--cart-10`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-5">
            <div className={styles.vpContactAddress}>
              <h3>
                Our Contact Info
              </h3>
              <div className="vp__address__container">
                {/* Start Single Address */}
                <div className={styles.vpAddress}>
                  <h4>
                    Address
                    </h4>
                  <p>1 Yorkville Ave, Toronto, Ontario, Canada</p>
                </div>
                {/* End Single Address */}
                {/* Start Single Address */}
                <div className={styles.vpAddress}>
                  <h4>
                    eMail
                    </h4>
                  <p>
                    <a href="mailto:demovoopo@mail.com">info@besanz.com</a>
                  </p>
                  <p>
                    {/* <a
                      href="http://demo.mailvoopo.info"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      demo.mailvoopo.info
                    </a> */}
                  </p>
                </div>
                {/* End Single Address */}
                {/* Start Single Address */}
                <div className={styles.vpAddress}>
                  <h4>
                    {/* {t("Phone")} */}
                    Phone
                    </h4>
                  <p>
                    <a href="tel:+1 855 388 9955">+1 855 388 9955</a>
                  </p>
                  <p>
                    <a href="tel:+1 416 388 9955">+1 416 388 9955</a>
                  </p>
                </div>
                {/* End Single Address */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.googleMap}>
        {/* location map */}
        {/* <LocationMap latitude="43.670749" longitude="-79.393040" /> */}

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.872124499165!2d-79.39036842336348!3d43.67162925123791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3569825be56d%3A0x44d8e6f33ce0bb9!2s1%20Yorkville%20Ave%2C%20Toronto%2C%20ON%20M4W%200B1%2C%20Canada!5e0!3m2!1sen!2slk!4v1685096545329!5m2!1sen!2slk" width="100%" height="100%" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </div>
  );
};

export default ContactMap;
