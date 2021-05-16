import React, { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

const Quote = () => {
	const [width, setWidth] = useState();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);

		window.addEventListener("load", () => {
			setWidth(window.innerWidth);
		});

		window.addEventListener("resize", () => {
			setWidth(window.innerWidth);
		});

		return () => {
			window.removeEventListener("load", () => {
				setWidth(window.innerWidth);
			});

			window.removeEventListener("resize", () => {
				setWidth(window.innerWidth);
			});

			setLoaded(false);
		};
	}, [width]);

	return loaded ? (
		<Slide bottom duration={500}>
			<div
				className="quote"
				style={{
					backgroundImage: 'url("https://res.cloudinary.com/djwa4cx9u/image/upload/v1617670297/jags/quote_n3onqz.png")',
					backgroundAttachment: "fixed",
				}}
			>
				<div className="quo w-100" style={{ top: `${width < 768 ? "-60px" : "-100px"}` }}>
					<div className="container d-flex justify-content-end">
						<svg
							width={`${width < 768 ? "120" : "196"}`}
							height={`${width < 768 ? "120" : "196"}`}
							viewBox="0 0 196 196"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g filter="url(#filter0_d)">
								<circle cx="98" cy="94" r="58" transform="rotate(-180 98 94)" fill="url(#paint0_linear)" />
							</g>
							<circle cx="98" cy="94" r="46" transform="rotate(-180 98 94)" fill="url(#paint1_linear)" />
							<path
								d="M97.8945 81.7368C96.0653 81.7368 94.3769 82.1228 92.8291 82.8947C91.3518 83.5965 90.191 84.5088 89.3467 85.6316C88.5025 86.6842 88.0804 87.7018 88.0804 88.6842C90.2613 88.8246 92.196 89.7719 93.8844 91.5263C95.6432 93.2105 96.5226 95.2105 96.5226 97.5263C96.5226 100.544 95.6432 102.895 93.8844 104.579C92.1256 106.193 90.0151 107 87.5528 107C84.7387 107 82.2764 106.018 80.1658 104.053C78.0553 102.018 77 99.2456 77 95.7368C77 93.421 77.5628 91.2105 78.6884 89.1053C79.8844 87 81.5025 85.2456 83.5427 83.8421C86.2161 81.9474 89.3116 81 92.8291 81C94.6583 81 96.3467 81.2456 97.8945 81.7368ZM119 81.7368C117.171 81.7368 115.482 82.1228 113.935 82.8947C112.457 83.5965 111.296 84.5088 110.452 85.6316C109.608 86.6842 109.186 87.7018 109.186 88.6842C111.367 88.8246 113.302 89.7719 114.99 91.5263C116.749 93.2105 117.628 95.2105 117.628 97.5263C117.628 100.544 116.749 102.895 114.99 104.579C113.231 106.193 111.121 107 108.658 107C105.844 107 103.382 106.018 101.271 104.053C99.1608 102.018 98.1055 99.2456 98.1055 95.7368C98.1055 93.421 98.6683 91.2105 99.794 89.1053C100.99 87 102.608 85.2456 104.648 83.8421C107.322 81.9474 110.417 81 113.935 81C115.764 81 117.452 81.2456 119 81.7368Z"
								fill="white"
							/>
							<defs>
								<filter
									id="filter0_d"
									x="0"
									y="0"
									width="196"
									height="196"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="20" />
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
								</filter>
								<linearGradient
									id="paint0_linear"
									x1="40"
									y1="152"
									x2="142.756"
									y2="58.1496"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="white" />
									<stop offset="1" stopColor="white" />
								</linearGradient>
								<linearGradient id="paint1_linear" x1="59.5" y1="77" x2="120" y2="133" gradientUnits="userSpaceOnUse">
									<stop stopColor="#02BEA5" />
									<stop offset="1" stopColor="#80EA9F" />
								</linearGradient>
							</defs>
						</svg>
					</div>
				</div>

				<div className="container-fluid px-0">
					<div className="container py-7 py-md-10 py-lg-12">
						<Zoom left>
							<div className="col-md-10 mx-auto container">
								<Zoom right>
									<p className="text-dark font-weight-bold text-center pb-5 first">
										"Where you innovate, how you innovate, and what you innovate are design problems."
									</p>
								</Zoom>
								<Zoom right>
									<p className="text-green text-center pt-5 font-weight-bold last">
										-- Tim Brown, CEO and President of IDEO
									</p>
								</Zoom>
							</div>
						</Zoom>
					</div>
				</div>
			</div>
		</Slide>
	) : (
		<div></div>
	);
};

export default Quote;
