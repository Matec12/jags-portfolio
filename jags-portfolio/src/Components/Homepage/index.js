import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Reusable/Footer";
import NavigationBar from "../Reusable/NavigationBar";
import ScrollToTop from "../Reusable/ScrollToTop";
import Banner from "./Banner";
import More from "../Reusable/More";
import Project from "./Project";
import Quote from "./Quote";

const Homepage = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="homepage">
			<NavigationBar />
			<Banner />
			<Quote />
			<Project />
			<More />
			<Footer />
			<ScrollToTop />
		</div>
	);
};

export default Homepage;
