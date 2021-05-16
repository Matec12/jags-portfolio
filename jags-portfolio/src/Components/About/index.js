import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Reusable/Footer";
import NavigationBar from "../Reusable/NavigationBar";
import ScrollToTop from "../Reusable/ScrollToTop";
import More from "../Reusable/More";
import MeetJags from "./Meetjags";
import Experience from "./Experience";
import Skills from "./Skills";

const About = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		document.title = "About Oluwatobi Adegoke (Jags Designs)";
		window.scrollTo(0, 0);

		return () => {
			document.title = "Oluwatobi Adegoke";
		};
	}, [pathname]);

	return (
		<div className="homepage about-page">
			<NavigationBar />
			<MeetJags />
			<Experience />
			<Skills />
			<More />
			<Footer />
			<ScrollToTop />
		</div>
	);
};

export default About;
