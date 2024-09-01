"use client"

import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { animateScroll } from "react-scroll";
import { MdExpandLess } from "react-icons/md";
import styles from "./Footer.module.scss";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import {useUser} from "@auth0/nextjs-auth0/client";

const logo = "/assets/images/logo/Logo_Full.png";
const logoDark = "/assets/images/logo/Logo_Full.png";
const images = [
  '/assets/images/phonepartners/cisco.png',
  '/assets/images/phonepartners/grandstream.png',
  '/assets/images/phonepartners/Polycom.png',
  '/assets/images/phonepartners/Snom.png',
  '/assets/images/phonepartners/Yealink.png'

]
const Footer = ({ footerBg }) => {

  const {user, error, isLoading} = useUser();
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    if (!window) { return }
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer className={`footer-area ${footerBg === "white" ? styles.footer2 : ""}`} >
      <div className={`${styles.footerTop} ${footerBg === "white" ? "bg--cart-7" : "bg--cart-2"
        }`} >
        <div className="container">
          <div className="row">
            {/* Start Single Wedget */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className={`${styles.singleWidget} m-singleWidget`}>
                <div className={styles.logo}>
                  <Link href={"/"}>
                    <img
                      src={footerBg === "white" ? logoDark : logo}
                      alt="voip" className="m-footerLogo"
                    />
                  </Link>
                </div>
                <div className={styles.content}>
                  <p>
                    Some of Our Supported Phone Partners
                  </p>

                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', }}>
                  {images.map((item, index) => (
                    <div key={index}>
                      <img src={item} key={index} className={styles.partnerLogo} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-12 col-sm-6 col-lg-2 offset-lg-1 xs__mt--40">
              <div className={`${styles.singleWidget} m-singleWidget`}>
                <h3 className={styles.ftTitle}>
                  Navigation
                </h3>
                <ul className={styles.ftContactLink}>
                  <li>
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/price-details">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/price-comparison">
                      Compare Plans
                    </Link>
                  </li>
                  <li>
                    <Link href="/request-demo">
                      Request Demo
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6 col-12 sm__mt--40 md__mt--40">
              <div className={`${styles.singleWidget} m-singleWidget`}>
                <h3 className={styles.ftTitle}>
                  BESANZ Info
                </h3>
                <ul className={styles.ftContactLink}>

                  <li>
                    <Link href="/features">
                      Features
                    </Link>
                  </li>

                  <li>
                    <Link href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/911info">
                      911 Info
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6 col-12 sm__mt--40 md__mt--40">
              <div className={`${styles.singleWidget} m-singleWidget`}>
                <h3 className={styles.ftTitle}>
                  Resources
                </h3>
                <ul className={styles.ftContactLink}>
                  <li>
                    <Link href="https://395c0d4bb6.appchemist.io/" target="_blank">
                      Support
                    </Link>
                  </li>
                  {(isLoading || !user) ?
                      <li>
                        <Link href="/api/auth/login">
                          Login
                        </Link>
                      </li>
                      :
                      <li>
                        <a href="/user-home">
                          My Dashboard
                        </a>
                      </li>
                  }
                  <li>
                    <Link href="/terms-and-condition">
                      Terms And Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Wedget */}
          </div>
        </div>
      </div>
      <div
        className={`${styles.copyright}  ${footerBg === "white" ? "bg--cart-8" : "bg--cart-3"
          }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6">
              <div className={styles.copyrightInner}>
                <p className="copyright-text">
                  &copy; BESANZ {new Date().getFullYear()}{" "}

                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className={styles.ftSocialLink}>
                <ul className={styles.socialIcon}>
                  <li>
                    <a target={"_blank"} className={styles.linkedinIn} href="https://www.linkedin.com/company/besanzofficial/">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a target={"_blank"} className={styles.twitter} href="https://twitter.com/besanzofficial">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a target={"_blank"} className={styles.facebookF} href="https://facebook.com/besanzofficial">
                      <FaFacebookF />
                    </a>

                  </li>
                  <li>
                    <a target={"_blank"} className={styles.instagram} href="https://instagram.com/besanzofficial">
                      <AiOutlineInstagram />
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <MdExpandLess />
      </button>
    </footer>
  );
};

Footer.propTypes = {
  footerBg: PropTypes.string
};

export default Footer;
