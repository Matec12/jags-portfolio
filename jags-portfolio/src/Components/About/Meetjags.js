import React from "react";
import Flip from "react-reveal/Flip";

const Meetjags = () => {
	return (
		<div className="meet-jags bg-dark-theme">
			<div className="container-fluid">
				<div className="container px-0">
					<div className="row justify-content-lg-stretch py-5 py-lg-7">
						<div className="col-lg-6 d-flex justify-content-center mt-lg-6">
							<img
								className="object-fit-cover"
								src="https://res.cloudinary.com/djwa4cx9u/image/upload/v1617670295/jags/jags-2_y4wbq1.png"
								alt="jags"
								loading="lazy"
							/>
						</div>
						<div className="col-lg-6 my-5 my-lg-0 z-10">
							<Flip right cascade>
								<h2 className="text-green font-weight-bold mb-lg-4">About Adegoke</h2>
							</Flip>
							<p>
								Having acquired experience in User Interface Design, Brand and Visual identity design and worked on several
								design projects, I'm motivated by a desire to solve problems, I work to design thoughtful and engaging
								products with the understanding that design is more of a problem-solving activity which does not only
								involve visual appeal but even more importantly, must solve the users need while also performing its
								intended function.
							</p>
							<p>
								While I can work independently to achieve any task within a given period of time, I love to work, and do
								efficiently with team members, As word of wisdom says "Talent wins games, but teamwork and intelligence win
								championships." I work to obtain optimum results and learning new ways to improve my craft while also
								leaving an open mind to criticism as it ensures growth.
							</p>
							<a
								href="https://drive.google.com/file/d/1tN6OMEfEwRBKdYUiaKbsLZUXbQhZNE9l/view?usp=sharing"
								target="_blank"
								rel="noreferrer"
								className="btn btn-outline-white d-flex justify-content-between px-md-4 py-3 br-0 mt-5 w-50"
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
					<div className="about">
						<div className="container h-100 d-flex justify-content-center justify-content-lg-start align-items-center">
							<h1 className="font-weight-bold">
								About
								<br />
								\me.
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Meetjags;
