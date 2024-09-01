import React from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import {useUser} from "@auth0/nextjs-auth0/client";

const Navigation = () => {

  const {user, error, isLoading} = useUser();

  return (
    <nav>
      <ul className={styles.mainMenu}>
        <li className={styles.drop}>
          <Link href="/">
            Home
          </Link>
        </li>

        <li className={styles.drop}>
          <Link href="/features">
            Features
          </Link>
        </li>

        <li>
          <Link href="/about">
            About
          </Link>
        </li>

        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>

        <li className={styles.drop}>
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li className={styles.drop}>
          <a href="https://besanz.simplelogin.net/" target="_blank">
            Login
          </a>
        </li>

        {(isLoading || !user) ?
            <li className={styles.drop}>
              <a href="/api/auth/login">
                Payment Login
              </a>
            </li>
            :
            <li className={styles.drop}>
              <a href="/user-home">
                My Dashboard
              </a>
            </li>
        }

      </ul>
    </nav>
  );
};

export default Navigation;
