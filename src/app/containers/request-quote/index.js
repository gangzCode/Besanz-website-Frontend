import React, { useState, useEffect } from "react";
import styles from "./RequestQuote.module.scss";
import Image from 'next/image';
import "./index.css";
import Link from "next/link";
import Button from "../../components/UI/button";


const RequestQuote = () => {


  return (
    <div className={`${styles.requestQuote} m-requestQuote`}>
      <div className="container">
        <div className={`${styles.requestQuoteWrap} m-requestQuoteWrap`}>

          <div className="row">
            <div className="col-lg-12">
              <h1>Request a Quote today!</h1>
              <p>Request a free no obligation Quote Today</p>
            </div>

            <div className="col-lg-4">
              <div className={styles.contactDetails}>
                <div className={styles.contactDetailsWrap}>
                  <h4>Address</h4>
                  <p>1 Yorkville Ave, Toronto, Ontario, Canada</p>
                </div>

                <div className={styles.contactDetailsWrap}>
                  <h4>eMail</h4>
                  <p><a href="mailto:demovoopo@mail.com">info@besanz.com</a></p>
                </div>

                <div className={styles.contactDetailsWrap}>
                  <h4>Phone</h4>
                  <p><a href="tel:+1 855 388 9955">+1 855 388 9955</a></p>
                  <p><a href="tel:+1 416 388 9955">+1 416 388 9955</a></p>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className={styles.imgWrap}>

                <form>
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className={styles.inputBox}>
                        <input
                          type="text"
                          placeholder="Name"
                          name="from_name"
                        />
                      </div>
                    </div>

                    <div className="col-12 col-lg-6">
                      <div className={styles.inputBox}>
                        {/* */}
                        <input
                          type="numeric"
                          placeholder="Phone Number"
                          name="message"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-lg-12">
                      <div className={styles.inputBox}>
                        <input
                          type="email"
                          placeholder="eMail"
                          name="email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className={styles.inputBox}>
                        <input
                          type="text"
                          placeholder="Company Name"
                          name="message"
                        />
                      </div>
                    </div>

                    <div className="col-12 col-lg-6">
                      <div className={styles.inputBox}>
                        <input
                          type="numeric"
                          placeholder="Number of Users"
                          name="message"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="policy-wrap">
                      <input
                        type="checkbox"
                        id="receiveMarketingEmail"
                        name="receiveMarketingEmail"
                        value="Yes, I would like to receive marketing communications about Besanz products, knowledge content and events"
                      />

                      <label
                        className="checkbox-label"
                        for="receiveMarketingEmail"
                      >
                        Yes, I would like to receive marketing communications about Besanz products, knowledge content and events
                      </label>
                    </div>

                    <div className="policy-wrap">
                      <input
                        type="checkbox"
                        id="privacy-policy"
                        name="privacy-policy"
                        value="You confirm that you have read and acknowledged Besanz's"
                      />
                      <label
                        className="checkbox-label"
                        for="privacy-policy"
                      >
                        You confirm that you have read and acknowledged Besanz's
                        <br />
                        <Link href="/privacy-policy" className="link">
                          Privacy Policy
                        </Link>{" "}
                      </label>
                    </div>
                  </div>

                  <div className={styles.inputBox}>
                    <div className={styles.qusBtn}>
                      <Button
                        type="button"
                        text="Request Quote"
                      />
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RequestQuote;