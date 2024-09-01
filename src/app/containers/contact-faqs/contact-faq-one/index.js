import React, { useState, useRef } from "react";
import styles from "./ContactFaqOne.module.scss";
import Link from "next/link";
import Button from "@/app/components/UI/button";
import "./index.css";
import emailjs from "@emailjs/browser";


//  pt--50
const ContactFaqOne = () => {

  const [data, setdata] = useState({});
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const companyNameRef = useRef(null);
  const phoneRef = useRef(null);
  const empNumRef = useRef(null);
  const form = useRef();

  const handleActiveTab = (e) => {
    e.preventDefault();

    if (!data.name) {
      return nameRef.current.focus();
    }
    if (!data.phone) {
      return phoneRef.current.focus();
    }
    if (!data.email) {
      return emailRef.current.focus();
    }

    if (!data.companyName) {
      return companyNameRef.current.focus();
    }


    if (!data.empNum) {
      return empNumRef.current.focus();
    }

    return handleSubmitQuote();
  };

  const handleChangeText = (val, name) => {
    let temp = Object.assign({}, data);
    temp[name] = val;
    setdata(temp);
  };

  const handleSubmitQuote = () => {
    emailjs
      .sendForm(
        "service_viiiq3k",
        "template_o7qnso9",
        form.current,
        "wwbQr8GN_ouITluww"
      )
      .then(
        (result) => {
          setdata({});
          form.current.reset();
        },
        (error) => {
          console.log("erorr-------------", error.text);
        }
      );

  };
  return (
    <div className="voopo__faq__area pb--120 bg--white home-top-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className={styles.faqInner}>
              <div className={styles.content}>
                <h1>
                  North America's Smartest Business Phone Solution
                </h1>
                <img
                  src={"/assets/images/quote.png"}
                  className="d-none d-lg-block"
                  alt="A woman  holding a laptop, representing the Besanz customer service team."
                  style={{
                    width: "80%",
                    height: "80%",
                    borderRadius: 20,
                    resizeMode: "contain",
                  }}
                />
                <p>
                  Our Cloud-Hosted Phone System Streamlines Communication, Improves Productivity, and Reduces Costs. Get our 100% Cloud-Based Business Phone Solution with Advanced Features, Scalability, and Reliability.
                </p>
              </div>
            </div>

          </div>

          <div className="col-12 col-lg-7 request-quote-wrap">
            <div className={styles.faqInner}>
              <div className={styles.content}>
                <h2>
                  Request a FREE Quote today!*
                </h2>

                <p style={{ width: "86%" }}>
                  Discover Your Options with Our Free, No-Obligation Quotes
                </p>

                <form ref={form} onSubmit={handleActiveTab}>
                  <div>
                    <div className="row">
                      <div className="col-12 col-lg-5">
                        <div className={styles.inputBox}>
                          <input
                            type="text"
                            ref={nameRef}
                            placeholder="Name"
                            name="from_name"
                            value={data.name}
                            onChange={(e) =>
                              handleChangeText(e.target.value, "name")
                            }
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-5">
                        <div className={styles.inputBox}>
                          {/* */}
                          <input
                            type="numeric"
                            placeholder="Phone Number"
                            name="message"
                            ref={phoneRef}
                            value={data.phone}
                            onChange={(e) =>
                              handleChangeText(e.target.value, "phone")
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-10">
                        <div className={styles.inputBox}>

                          <input
                            type="email"
                            placeholder="Email"
                            ref={emailRef}
                            name="email"
                            value={data.email}
                            onChange={(e) =>
                              handleChangeText(e.target.value, "email")
                            }
                          />


                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-5">
                        <div className={styles.inputBox}>
                          <input
                            type="text"
                            placeholder="Company Name"
                            ref={companyNameRef}
                            name="message"
                            value={data.companyName}
                            onChange={(e) =>
                              handleChangeText(e.target.value, "companyName")
                            }
                          />

                        </div>
                      </div>
                      <div className="col-12 col-lg-5">
                        <div className={styles.inputBox}>

                          <input
                            type="numeric"
                            placeholder="No of Users"
                            ref={empNumRef}
                            value={data.empNum}
                            name="message"
                            onChange={(e) =>
                              handleChangeText(e.target.value, "empNum")
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>


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
                    {/* )} */}
                  </div>

                  <div>

                  </div>
                  {/* )} */}
                  <div className={styles.inputBox}>
                    <div className={styles.qusBtn}>
                      <Button
                        type="button"
                        text="Request Quote"
                        customStyle={{ marginTop: "40px" }}
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

export default ContactFaqOne;
