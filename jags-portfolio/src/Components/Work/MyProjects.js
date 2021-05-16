import React from "react";
// import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";

const MyProjects = () => {
	return (
		<div className="experience bg-dark-theme pt-5 pt-lg-7 my-n1 projet">
			<div className="container-fluid">
				<div className="container px-0">
					<div className="pt-md-4 z-10">
						<h2 className="text-green font-weight-bold">My Projects</h2>
						<p>Here are a few projects I worked on different roles from product manager to product designer</p>
					</div>

					<div className="row py-4 py-md-5 align-items-md-stretch">
						<div className="col-md-6 d-flex">
							{/* <Link className="d-block w-100" to="/work"> */}
							<Flip top>
								<img
									className="w-100 object-fit-cover h-100"
									src="https://res.cloudinary.com/djwa4cx9u/image/upload/v1617670295/jags/project-1_hcjs5w.png"
									alt="Project 1"
									loading="lazy"
								/>
							</Flip>{" "}
							{/* </Link> */}
						</div>
						<div className="col-md-6 d-flex flex-column justify-content-end align-items-start mt-4 mt-md-auto pl-md-4 pl-lg-5">
							<p className="no font-weight-bold">01</p>
							<h3 className="font-weight-bold">SogoVR</h3>
							<p>Experience entertaiment in a different way</p>
							<a
								href="https://drive.google.com/file/d/1tN6OMEfEwRBKdYUiaKbsLZUXbQhZNE9l/view?usp=sharing"
								target="_blank"
								rel="noreferrer"
								className="btn btn-outline-white d-flex justify-content-between px-md-3 px-lg-4 py-3 br-0 w-sm-60 w-50 w-lg-35 disabled"
								onClick={(event) => event.preventDefault()}
							>
								View Case Study
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
					<div className="row py-4 py-md-5 align-items-md-stretch">
						<div className="col-md-6 d-flex order-md-1">
							{/* <Link className="d-block w-100" to="/work"> */}
							<Flip top>
								<img
									className="w-100 object-fit-cover h-100"
									src="https://res.cloudinary.com/djwa4cx9u/image/upload/v1617670296/jags/project-3_o9o3pz.png"
									alt="Project 3"
									loading="lazy"
								/>
							</Flip>{" "}
							{/* </Link> */}
						</div>
						<div className="col-md-6 d-flex flex-column justify-content-end align-items-start mt-4 mt-md-auto pr-md-4 pr-lg-5">
							<p className="no font-weight-bold">02</p>
							<h3 className="font-weight-bold">Finerge</h3>
							<p>Experience entertaiment in a different way</p>
							<a
								href="https://drive.google.com/file/d/1tN6OMEfEwRBKdYUiaKbsLZUXbQhZNE9l/view?usp=sharing"
								target="_blank"
								rel="noreferrer"
								className="btn btn-outline-white d-flex justify-content-between px-md-3 px-lg-4 py-3 br-0 w-sm-60 w-50 w-lg-35 disabled"
								onClick={(event) => event.preventDefault()}
							>
								View Case Study
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
					<div className="row py-4 py-md-5 align-items-md-stretch">
						<div className="col-md-6 d-flex">
							{/* <Link className="d-block w-100" to="/work"> */}
							<Flip top>
								<img
									className="w-100 object-fit-cover h-100"
									src="https://res.cloudinary.com/djwa4cx9u/image/upload/v1617670296/jags/project-2_gesy2t.png"
									alt="Project 3"
									loading="lazy"
								/>
							</Flip>{" "}
							{/* </Link> */}
						</div>
						<div className="col-md-6 d-flex flex-column justify-content-end align-items-start mt-4 mt-md-auto pl-md-4 pl-lg-5">
							<p className="no font-weight-bold">03</p>
							<h3 className="font-weight-bold">Boundless Pay</h3>
							<p>Endless opportunities on our secure digital mobile bank.</p>
							<a
								href="https://drive.google.com/file/d/1tN6OMEfEwRBKdYUiaKbsLZUXbQhZNE9l/view?usp=sharing"
								target="_blank"
								rel="noreferrer"
								className="btn btn-outline-white d-flex justify-content-between px-md-3 px-lg-4 py-3 br-0 w-sm-60 w-50 w-lg-35 disabled"
								onClick={(event) => event.preventDefault()}
							>
								View Case Study
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

					<div className="about">
						<div className="container h-100 d-flex justify-content-start align-items-center px-0">
							<h1 className="font-weight-bold">
								My
								<br />
								\Projects.
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProjects;
