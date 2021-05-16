import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Reusable/Footer";
import NavigationBar from "../Reusable/NavigationBar";
import ScrollToTop from "../Reusable/ScrollToTop";
import MyProjects from "./MyProjects";

const Work = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		document.title = "Oluwatobi Adegoke (jags Designs) Portfolio"
		window.scrollTo(0, 0);

		return () => {
			document.title = "Oluwatobi Adegoke";
		};
	}, [pathname]);

	return (
		<div className="homepage work-page">
			<NavigationBar />
			<MyProjects />
			<Footer />
			<ScrollToTop />
		</div>
	);
};

export default Work;
