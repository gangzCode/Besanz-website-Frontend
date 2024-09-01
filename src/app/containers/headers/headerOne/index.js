"use client"

import React, { useEffect, useState } from "react";
import Logo from "../../../components/header/Logo";
import Navigation from "../../../components/header/Navigation";
import HeaderBtn from "../../../components/header/HeaderBtn";
import MobileMenu from "../../../components/header/MobileMenu";
import styles from "./Header.module.scss";
import { BiSupport } from 'react-icons/bi'
import { BsPhone } from 'react-icons/bs'
import Link from "next/link";

import "./header.css"

const Header = () => {

	const [scroll, setScroll] = useState(0);
	const [headerTop, setHeaderTop] = useState(0);

	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		if (!window) return;
		const header = document.querySelector("header");
		setHeaderTop(header.offsetTop);
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);


	useEffect(() => {
		if (!window) return;
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	});

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	return (
		<header
			className={`${styles.headerArea} ${scroll > headerTop ? styles.stick : ""
				}`}
		>

			{scroll <= 0 &&
				<div className="topbarr" style={{ marginTop: scroll <= 0 ? 0 : -20 }}>
					<div className="container">

						{/* <div className="responsive-breakpoint"></div> */}

						<a href="https://395c0d4bb6.appchemist.io/" target="_blank" className="topbar-link">
							<span><BiSupport size={20} /> Support</span>
						</a>

						<a href="tel://+1 855 388 9955" className="topbar-link">
							<span><BsPhone size={20} /> +1 855 388 9955</span>
						</a>

					</div>
				</div>
			}
			<div className="container">
				<div className="row d-flex justify-content-between" style={{ paddingTop: scroll <= 0 ? 10 : 0 }}>
					<div className="col-6 col-lg-2">
						{/* logo */}
						<Logo />
					</div>

					<div class="col-lg-10 col-md-6 col-6">
						<div className="row flex-row-reverse">
							<div className="col-6 col-lg-auto pt-0 pt-md-0 pt-lg-3">
								{/* header button */}
								<HeaderBtn styles={styles} />
							</div>
							<div className="col-lg-7 d-none d-lg-block">
								{/* navigation */}
								<Navigation />
							</div>
						</div>
					</div>

				</div>

				{/* Mobile Menu */}
				<MobileMenu styles={styles} />

			</div>
		</header>
	);
};

export default Header;
