import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
	return (
		<div className="footer bg-dark-theme pt-6 pb-5 container-fluid" id="contact">
			<Fade bottom>
				<div className="container">
					<div className="row bg-green rounded pb-5 pb-md-2">
						<div className="col-md-6 pt-5">
							<div className="pl-4 pl-md-5">
								<div className="d-flex justify-content-between align-items-center mb-5">
									<h2 className="font-weight-bold">Currently open to opportunities!</h2>
									<span className="box d-inline-block rounded-circle"></span>
								</div>
								<p>
									I'm currently open to opportunities, I would love to learn more about what you're building and how i can
									help your bottom line look good.
								</p>
							</div>
							<span className="box d-inline-block d-md-none rounded-circle"></span>
						</div>
						<div className="col-md-6 pt-3 d-flex justify-content-between justify-content-md-end align-items-end pt-lg-5">
							<div className="d-flex w-80 pr-md-3">
								<div className="pr-2 col-md-6 pl-0">
									<div className="box-h d-flex flex-column justify-content-between align-items-start p-3">
										<div className="ml-auto">
											<i className="fa fa-envelope-o"></i>
										</div>
										<a
											href="mailto:Adegokeoluwatobi@gmail.com"
											className="text-white"
											target="_blank"
											rel="noreferrer"
										>
											Send me a message!
										</a>
									</div>
								</div>
								<div className="pl-2 col-md-6 pr-0">
									<div className="box-h d-flex flex-column justify-content-between align-items-start p-3">
										<div className="ml-auto">
											<i className="fa fa-phone"></i>
										</div>

										<a
											href="https://calendly.com/Adegokeoluwatobi"
											className="text-left text-white"
											target="_blank"
											rel="noreferrer"
										>
											Schedule a call
										</a>
									</div>
								</div>
							</div>
							<span className="box d-inline-block rounded-circle"></span>
						</div>
						<span className="box d-none d-md-inline-block ml-md-2 rounded-circle"></span>
					</div>

					<div className="py-5 px-0">
						<div className="d-flex justify-content-between align-items-center px-0">
							<img
								className="line"
								src="https://res.cloudinary.com/djwa4cx9u/image/upload/v1617670292/jags/line_bdthmc.png"
								alt=""
								loading="lazy"
							/>
							<div>
								<a href="https://twitter.com/AdegokeO" target="_blank" rel="noreferrer" className="mx-1 mx-md-2">
									<svg width="20" height="20" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10.052 26.9999C22.128 26.9999 28.734 16.9939 28.734 8.33192C28.734 8.05192 28.734 7.76792 28.722 7.48792C30.0081 6.55689 31.1181 5.40422 32 4.08392C30.7986 4.61362 29.5255 4.96273 28.222 5.11992C29.5951 4.2992 30.6234 3.00786 31.116 1.48592C29.826 2.25017 28.414 2.78667 26.942 3.07192C25.9524 2.01797 24.6428 1.31976 23.2162 1.08544C21.7895 0.851116 20.3254 1.09376 19.0507 1.7758C17.7759 2.45783 16.7616 3.54118 16.1649 4.85804C15.5682 6.1749 15.4224 7.65179 15.75 9.05992C13.1395 8.92902 10.5856 8.25086 8.25409 7.06941C5.92254 5.88796 3.86537 4.22961 2.216 2.20192C1.37868 3.64809 1.12315 5.35872 1.50129 6.98645C1.87944 8.61418 2.86291 10.037 4.252 10.9659C3.21108 10.9306 2.19304 10.651 1.28 10.1499V10.2399C1.28179 11.7549 1.80661 13.2228 2.76575 14.3954C3.72488 15.5681 5.0595 16.3737 6.544 16.6759C5.98053 16.8312 5.39846 16.9085 4.814 16.9059C4.40197 16.9072 3.99076 16.869 3.586 16.7919C4.00557 18.096 4.82255 19.2363 5.92249 20.0529C7.02244 20.8695 8.35027 21.3216 9.72 21.3459C7.39311 23.1735 4.5188 24.1647 1.56 24.1599C1.03864 24.1621 0.517646 24.1321 0 24.0699C3.00303 25.9844 6.4906 27.001 10.052 26.9999Z"
											fill="white"
										/>
									</svg>
								</a>
								<a
									href="https://www.linkedin.com/in/oluwatobiAdegoke"
									target="_blank"
									rel="noreferrer"
									className="mx-1 mx-md-2"
								>
									<svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M0 2.292C0 1.026 1.052 0 2.35 0H29.65C30.948 0 32 1.026 32 2.292V29.708C32 30.974 30.948 32 29.65 32H2.35C1.052 32 0 30.974 0 29.708V2.292ZM9.886 26.788V12.338H5.084V26.788H9.886ZM7.486 10.364C9.16 10.364 10.202 9.256 10.202 7.868C10.172 6.45 9.162 5.372 7.518 5.372C5.874 5.372 4.8 6.452 4.8 7.868C4.8 9.256 5.842 10.364 7.454 10.364H7.486ZM17.302 26.788V18.718C17.302 18.286 17.334 17.854 17.462 17.546C17.808 16.684 18.598 15.79 19.926 15.79C21.664 15.79 22.358 17.114 22.358 19.058V26.788H27.16V18.5C27.16 14.06 24.792 11.996 21.632 11.996C19.084 11.996 17.942 13.396 17.302 14.382V14.432H17.27C17.2806 14.4153 17.2913 14.3986 17.302 14.382V12.338H12.502C12.562 13.694 12.502 26.788 12.502 26.788H17.302Z"
											fill="white"
										/>
									</svg>
								</a>
								<a href="https://www.instagram.com/jags_designs/" target="_blank" rel="noreferrer" className="mx-1 mx-md-2">
									<svg width="20" height="20" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M16.4956 10.6644C13.4658 10.6644 10.9933 13.062 10.9933 16C10.9933 18.938 13.4658 21.3356 16.4956 21.3356C19.5253 21.3356 21.9978 18.938 21.9978 16C21.9978 13.062 19.5253 10.6644 16.4956 10.6644ZM32.9982 16C32.9982 13.7905 33.0188 11.601 32.8908 9.39554C32.7629 6.83381 32.1602 4.56027 30.2285 2.68701C28.2926 0.809737 25.9522 0.229345 23.3104 0.105261C21.0319 -0.018823 18.7741 0.00119058 16.4997 0.00119058C14.2212 0.00119058 11.9633 -0.018823 9.68897 0.105261C7.04723 0.229345 4.70269 0.813739 2.77092 2.68701C0.835026 4.56427 0.236507 6.83381 0.108548 9.39554C-0.0194109 11.605 0.00122776 13.7945 0.00122776 16C0.00122776 18.2055 -0.0194109 20.399 0.108548 22.6045C0.236507 25.1662 0.839153 27.4397 2.77092 29.313C4.70682 31.1903 7.04723 31.7707 9.68897 31.8947C11.9675 32.0188 14.2253 31.9988 16.4997 31.9988C18.7782 31.9988 21.036 32.0188 23.3104 31.8947C25.9522 31.7707 28.2967 31.1863 30.2285 29.313C32.1644 27.4357 32.7629 25.1662 32.8908 22.6045C33.0229 20.399 32.9982 18.2095 32.9982 16ZM16.4956 24.2095C11.8106 24.2095 8.02963 20.5431 8.02963 16C8.02963 11.4569 11.8106 7.79045 16.4956 7.79045C21.1805 7.79045 24.9615 11.4569 24.9615 16C24.9615 20.5431 21.1805 24.2095 16.4956 24.2095ZM25.3082 9.37152C24.2144 9.37152 23.3311 8.51494 23.3311 7.45423C23.3311 6.39351 24.2144 5.53693 25.3082 5.53693C26.4021 5.53693 27.2854 6.39351 27.2854 7.45423C27.2857 7.7061 27.2348 7.95556 27.1356 8.18832C27.0363 8.42108 26.8907 8.63256 26.707 8.81066C26.5234 8.98876 26.3053 9.12998 26.0653 9.22622C25.8252 9.32246 25.568 9.37184 25.3082 9.37152Z"
											fill="white"
										/>
									</svg>
								</a>
							</div>

							<img
								className="line"
								src="https://res.cloudinary.com/djwa4cx9u/image/upload/v1617670291/jags/line2_axipz1.png"
								alt=""
								loading="lazy"
							/>
						</div>
					</div>

					<p className="text-center mb-0">
						Designed by{" "}
						<a className="text-green link" href="mailto:Adegokeoluwatobi@gmail.com" target="_blank" rel="noreferrer">
							jags
						</a>
						. Built with <span className="text-danger">❤</span> by{" "}
						<a className="text-green link" href="mailto:dejalayo@gmail.com" target="_blank" rel="noreferrer">
							Alayo Ibrahim
						</a>
					</p>
				</div>
			</Fade>
		</div>
	);
};

export default Footer;
