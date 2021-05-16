import React from "react";
import { Link } from "react-router-dom";
import Pulse from "react-reveal/Pulse";

const Banner = () => {
	return (
		<div className="banner">
			<Pulse>
				<div className="container-fluid px-0 z-10">
					<div className="container">
						<div className="row flex-column flex-md-row justify-content-md-between align-items-center">
							<div className="col-md-7 col-lg-6 order-1 pt-4 pb-5 pb-md-auto px-sm-0">
								<h1 className="text-green font-weight-bold d-none d-md-block name">Oluwatobi Adegoke.</h1>
								<h5 className="text-white font-weight-bold d-md-none">Oluwatobi Adegoke.</h5>
								<h1 className="text-green font-weight-bold d-md-none mb-3">Product Designer.</h1>
								<p>
									A product designer from Lagos, Nigeria. with a strong passion for design solutions in their simplest and
									most usable form while serving both Users and Business Goals.
								</p>
								<div className="d-grid links pt-4 pb-5 pb-md-0">
									<Link to="/about" className="btn btn-outline-green d-flex justify-content-between px-md-4 py-3 br-0">
										More about me
										<span>
											<svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M5.62405 1.7645L1.51182 5.87674L0.836243 5.20116L4.948 1.08893H1.32405V0.133369H6.57961V5.38893H5.62405V1.7645Z"
													fill="white"
												/>
											</svg>
										</span>
									</Link>
									<a
										href="https://drive.google.com/file/d/1tN6OMEfEwRBKdYUiaKbsLZUXbQhZNE9l/view?usp=sharing"
										target="_blank"
										rel="noreferrer"
										className="btn btn-outline-white d-flex justify-content-between px-md-4 py-3 br-0"
									>
										My Resume
										<span>
											<svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M5.62405 1.7645L1.51182 5.87674L0.836243 5.20116L4.948 1.08893H1.32405V0.133369H6.57961V5.38893H5.62405V1.7645Z"
													fill="white"
												/>
											</svg>
										</span>
									</a>
								</div>
							</div>
							<div className="col-md-5 col-lg-6  order-md-1 center">
								<img
									className="jags-img"
									src="https://res.cloudinary.com/djwa4cx9u/image/upload/v1617670295/jags/jags-img_zbimrg.png"
									alt="jags design CEO"
									loading="lazy"
								/>
							</div>
						</div>
					</div>
				</div>
			</Pulse>
			<div className="about">
				<div className="container h-100 d-flex justify-content-center align-items-center">
					<h1 className="font-weight-bold">
						About
						<br />
						\me.
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Banner;
