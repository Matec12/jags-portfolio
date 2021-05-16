import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 300) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 300) {
			setShowScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);

		return () => {
			window.removeEventListener("scroll", checkScrollTop);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [window.location.href, showScroll]);

	return (
		<span className={`bg-sec rounded-circle shadow z-10 ${showScroll ? "d-block" : "d-none"}`} id="scrollTop" onClick={scrollTop}>
			<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25Z"
					fill="#10B381"
				/>
				<path
					d="M20 1.25C30.4934 1.25 39 11.8832 39 25C39 38.1168 30.4934 48.75 20 48.75C9.50659 48.75 1 38.1168 1 25C1 11.8832 9.50659 1.25 20 1.25Z"
					stroke="white"
					strokeWidth="2"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M13.8816 20.2349C14.2771 20.7294 14.9185 20.7294 15.314 20.2349L18.9871 15.6437V36.2214C18.9871 36.9208 19.4406 37.4875 20 37.4875C20.5594 37.4875 21.0129 36.9208 21.0129 36.2214V15.6437L24.6859 20.2349C25.0815 20.7294 25.7228 20.7294 26.1184 20.2349C26.514 19.7405 26.514 18.9388 26.1184 18.4444L20.7172 11.6928C20.7138 11.6885 20.7104 11.6844 20.707 11.6802C20.6145 11.5674 20.509 11.4813 20.3967 11.4215C20.2749 11.3567 20.1408 11.3208 20 11.3208C19.855 11.3208 19.7171 11.3588 19.5924 11.4274C19.4959 11.4804 19.4046 11.5532 19.3225 11.6457C19.3078 11.6622 19.2935 11.6792 19.2797 11.6968L13.8816 18.4444C13.486 18.9388 13.486 19.7405 13.8816 20.2349Z"
					fill="white"
				/>
			</svg>
		</span>
	);
};

export default ScrollToTop;
