"use client"

import React, { useRef } from 'react';
import styles from "./ContactForm.module.scss";
import Button from "@/app/components/UI/button";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_viiiq3k', 'template_rstwwgq', form.current, 'wwbQr8GN_ouITluww')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });

  };


  return (
    <div className="voopo__contact ptb--110">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={styles.voopoContactForm}>
              <h2>
                If you need to contact us, Please fill out the form below.
              </h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className={styles.singleContactForm}>
                  <input type="text" name="from_name"
                    placeholder="Type Your Name"
                  />
                </div>
                <div className={styles.singleContactForm}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type Your eMail"
                  />
                </div>
                <div className={`${styles.singleContactForm} message`}>
                  <textarea
                    name="message"
                    placeholder="Type Your Message"
                    defaultValue={""}
                  />
                </div>
                <div className={styles.contactBtn}>
                  <Button type="button"
                    text="Send"
                  />

                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
            <div className={styles.contactThumb}>
              <img src={`/assets/images/contact.png`} alt="Seamless integration with North American business operations" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
