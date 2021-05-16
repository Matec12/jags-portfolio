import React from "react";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Project = () => {
	return (
		<div className="my-project py-5">
			<div className="container-fluid px-0 z-10">
				<div className="container">
					<div className="row py-md-5">
						<Slide left>
							<div className="col-md-6 mx-0 px-sm-0 pt-6 pt-lg-7 pr-md-4">
								<div className="px-0 z-10">
									<h2 className="text-green font-weight-bold">My Projects</h2>
									<p>Here are a few projects I worked on different roles from product manager to product designer</p>
									<div className="pt-4 pb-5 pb-md-0">
										<a
											href="https://"
											rel="noreferrer"
											target="_blank"
											className="btn btn-outline-white d-none d-md-flex justify-content-between px-lg-4 py-3 w-50 br-0 disabled"
											onClick={(event) => event.preventDefault()}
										>
											All Case Studies
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
								<div className="about project">
									<h1 className="font-weight-bold">
										My
										<br />
										Projects
									</h1>
								</div>
							</div>
						</Slide>
						<div className="pt-md-6 display-projects px-3 px-md-0">
							<Carousel
								additionalTransfrom={0}
								arrows
								autoPlay
								autoPlaySpeed={5000}
								centerMode={false}
								className=""
								containerClass="container carousel-container"
								dotListClass=""
								draggable
								focusOnSelect={false}
								infinite
								itemClass=""
								keyBoardControl
								minimumTouchDrag={80}
								partialVisible
								renderButtonGroupOutside={false}
								renderDotsOutside={false}
								responsive={{
									mobile: {
										breakpoint: {
											max: 464,
											min: 0,
										},
										items: 1,
										partialVisibilityGutter: 30,
									},
									tablet: {
										breakpoint: {
											max: 1024,
											min: 464,
										},
										items: 1,
										partialVisibilityGutter: 30,
									},
									desktop: {
										breakpoint: {
											max: 3000,
											min: 1024,
										},
										items: 2,
										partialVisibilityGutter: 40,
									},
								}}
								showDots={true}
								sliderClass=""
								slidesToSlide={1}
								swipeable
							>
								<Link className="d-block" to="/">
									<div className="slides">
										<img
											className="w-100"
											src="https://res.cloudinary.com/djwa4cx9u/image/upload/v1617670298/jags/pro-1_bowoaf.png"
											alt="Project 1"
											loading="lazy"
										/>
										<div>Visit site</div>
									</div>
								</Link>
								<Link className="d-block" to="/">
									<div className="slides">
										<img
											className="w-100"
											src="https://res.cloudinary.com/djwa4cx9u/image/upload/v1617670298/jags/pro-2_lgrn1i.png"
											alt="Project 1"
											loading="lazy"
										/>
										<div>Visit site</div>
									</div>
								</Link>
								<Link className="d-block" to="/">
									<div className="slides">
										<img
											className="w-100"
											src="https://res.cloudinary.com/djwa4cx9u/image/upload/v1617670298/jags/pro-1_bowoaf.png"
											alt="Project 1"
											loading="lazy"
										/>
										<div>Visit site</div>
									</div>
								</Link>
								<Link className="d-block" to="/">
									<div className="slides">
										<img
											className="w-100"
											src="https://res.cloudinary.com/djwa4cx9u/image/upload/v1617670298/jags/pro-2_lgrn1i.png"
											alt="Project 1"
											loading="lazy"
										/>
										<div>Visit site</div>
									</div>
								</Link>
							</Carousel>
							{/* <div className="controls mt-4 d-flex justify-content-between align-items-center">
								<div className="controls__select">
									<span className="d-inline-block rounded-circle mr-2 bg-white"></span>
									<span className="d-inline-block rounded-circle mr-2 bg-white active"></span>
									<span className="d-inline-block rounded-circle mr-2 bg-white"></span>
									<span className="d-inline-block rounded-circle bg-white"></span>
								</div>
								<div className="nav mr-md-5">
									<span className="d-inline-block rounded-circle prev mr-3">
										<svg width="15" height="10" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M18.75 7.74998H3.92501L8.46252 2.29998C8.67469 2.04471 8.77677 1.71561 8.74629 1.38507C8.71582 1.05454 8.55529 0.749652 8.30002 0.537478C8.04474 0.325305 7.71564 0.223228 7.38511 0.253702C7.05458 0.284177 6.74969 0.444708 6.53751 0.699979L0.287515 8.19998C0.245466 8.25963 0.207864 8.3223 0.175015 8.38748C0.175015 8.44998 0.175015 8.48748 0.0875155 8.54998C0.0308573 8.6933 0.00119166 8.84587 1.52588e-05 8.99998C0.00119166 9.15409 0.0308573 9.30665 0.0875155 9.44998C0.0875155 9.51248 0.0875151 9.54998 0.175015 9.61248C0.207864 9.67765 0.245466 9.74032 0.287515 9.79998L6.53751 17.3C6.65504 17.4411 6.80222 17.5546 6.96857 17.6323C7.13493 17.7101 7.31638 17.7503 7.50002 17.75C7.79208 17.7505 8.07513 17.6488 8.30002 17.4625C8.42659 17.3575 8.53122 17.2287 8.60791 17.0832C8.6846 16.9378 8.73184 16.7787 8.74694 16.6149C8.76203 16.4512 8.74468 16.2861 8.69587 16.1291C8.64707 15.9721 8.56777 15.8263 8.46252 15.7L3.92501 10.25H18.75C19.0815 10.25 19.3995 10.1183 19.6339 9.88386C19.8683 9.64944 20 9.3315 20 8.99998C20 8.66846 19.8683 8.35052 19.6339 8.1161C19.3995 7.88167 19.0815 7.74998 18.75 7.74998Z"
												fill="#10B381"
											/>
										</svg>
									</span>
									<span className="d-inline-block rounded-circle next">
										<svg width="15" height="10" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M1.24998 7.74998H16.075L11.5375 2.29998C11.3253 2.04471 11.2232 1.71561 11.2537 1.38507C11.2842 1.05454 11.4447 0.749652 11.7 0.537478C11.9553 0.325305 12.2844 0.223228 12.6149 0.253702C12.9454 0.284177 13.2503 0.444708 13.4625 0.699979L19.7125 8.19998C19.7545 8.25963 19.7921 8.3223 19.825 8.38748C19.825 8.44998 19.825 8.48748 19.9125 8.54998C19.9691 8.6933 19.9988 8.84587 20 8.99998C19.9988 9.15409 19.9691 9.30665 19.9125 9.44998C19.9125 9.51248 19.9125 9.54998 19.825 9.61248C19.7921 9.67765 19.7545 9.74032 19.7125 9.79998L13.4625 17.3C13.345 17.4411 13.1978 17.5546 13.0314 17.6323C12.8651 17.7101 12.6836 17.7503 12.5 17.75C12.2079 17.7505 11.9249 17.6488 11.7 17.4625C11.5734 17.3575 11.4688 17.2287 11.3921 17.0832C11.3154 16.9378 11.2682 16.7787 11.2531 16.6149C11.238 16.4512 11.2553 16.2861 11.3041 16.1291C11.3529 15.9721 11.4322 15.8263 11.5375 15.7L16.075 10.25H1.24998C0.918465 10.25 0.600521 10.1183 0.3661 9.88386C0.13168 9.64944 -1.52588e-05 9.3315 -1.52588e-05 8.99998C-1.52588e-05 8.66846 0.13168 8.35052 0.3661 8.1161C0.600521 7.88167 0.918465 7.74998 1.24998 7.74998Z"
												fill="white"
											/>
										</svg>
									</span>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
