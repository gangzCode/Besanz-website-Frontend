import React from "react";
import Link from "next/link";
import "./index.css"
import styles from "@/app/components/header/Navigation.module.scss";
import {useUser} from "@auth0/nextjs-auth0/client";

const MobileNavMenu = ({styles}) => {

    const {user, error, isLoading} = useUser();

    return (
        <nav className={styles.offcanvasNavigation} id="offcanvas-navigation">
            <ul>
                <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
                    <Link href="/">
                        Home
                    </Link>
                </li>

                <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
                    <Link href="/features">
                        Features
                    </Link>
                </li>

                <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
                    <Link href="/about">
                        About
                    </Link>
                </li>

                <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
                    <Link href="/blog">
                        Blog
                    </Link>
                </li>

                <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>

                {(isLoading || !user) ?
                    <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
                        <Link href="/api/auth/login">
                            Login
                        </Link>
                    </li>
                    :
                    <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
                        <Link href="/user-home">
                            My Dashboard
                        </Link>
                    </li>
                }

                <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
                    <Link href="https://395c0d4bb6.appchemist.io/" target="_blank">
                        Support
                    </Link>
                </li>

            </ul>
        </nav>
    );
};

export default MobileNavMenu;
