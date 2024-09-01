import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import MobileNavMenu from "./sub-components/MobileNavMenu";
import MobileWidgets from "./sub-components/MobileWidgets";
import { IoMdClose } from "react-icons/io";
import Logo from "./Logo";

const MobileMenu = ({ styles }) => {

    const [screen, setScreen] = useState(null);

    useEffect(() => {
        if(window)setScreen(window?.screen)
    }, [])

    useEffect(() => {
        const offCanvasNav = document.querySelector("#offcanvas-navigation");
        const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
            `.${styles.subMenu}`
        );

        const anchorLinks = offCanvasNav.querySelectorAll("a");

        for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
            offCanvasNavSubMenu[i].insertAdjacentHTML(
                "beforebegin",
                `<span 
        class=${styles.menuExpand}
        ><i></i></span>`
            );
        }

        const menuExpand = offCanvasNav.querySelectorAll(`.${styles.menuExpand}`);
        const numMenuExpand = menuExpand.length;

        for (let i = 0; i < numMenuExpand; i++) {
            menuExpand[i].addEventListener("click", e => {
                sideMenuExpand(e);
            });
        }

        for (let i = 0; i < anchorLinks.length; i++) {
            anchorLinks[i].addEventListener("click", () => {
                closeMobileMenu();
            });
        }
    });

    const sideMenuExpand = e => {
        e.currentTarget.parentElement.classList.toggle(styles.active);
    };

    const closeMobileMenu = () => {
        const offcanvasMobileMenu = document.querySelector(
            "#offcanvas-mobile-menu"
        );
        offcanvasMobileMenu.classList.remove(styles.active);
    };

    return (
        <div
            className={styles.offcanvasMobileMenu}
            style={{ width: screen?.width, background: "red", padding: 0 }}
            id="offcanvas-mobile-menu">

            <div className={styles.offcanvasWrapper}
                style={{
                    paddingTop: '10%',
                    overflowX: "hidden",
                    paddingLeft: "5%",
                    paddingBottom: 0,
                    backgroundColor: "#ffffff",
                    border: "none",
                    boxShadow: "none"
                }}>
                <div className="row" style={{ flexDirection: "row", alignItems: "center" }}>


                    <div className="col-6">
                        <Logo />
                    </div>

                    <div className="col-4"></div>

                    <div className="col-2">

                        <button
                            id="mobile-menu-close-trigger"
                            style={{
                                background: "transparent",
                                color: "#233146",
                                border: "none",

                            }}
                            onClick={() => closeMobileMenu()}
                        >
                            <IoMdClose size={28} />
                        </button>
                    </div>
                </div>
                <div className={styles.offcanvasInnerContent} style={{ paddingLeft: '4%', paddingTop: '6%', height: '50vh' }} >

                    <MobileNavMenu styles={styles} />
                    
                    <div style={{ marginTop: -40 }} >
                        <MobileWidgets styles={styles} />
                    </div>

                </div>
            </div>

        </div>
    );
};

MobileMenu.propTypes = {
    styles: PropTypes.object
};

export default MobileMenu;
