import React from "react";
import Slider from "react-slick";
import Flip from "react-reveal/Flip";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const More = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: true,
		centerPadding: "0px",
		responsive: [
			{
				breakpoint: 1203,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className="py-7 more">
			<div className="container-fluid">
				<div className="container px-0">
					<Flip right cascade>
						<h2 className="text-center text-green font-weight-bold">More About Me.</h2>
					</Flip>

					<Slider {...settings} className="my-4">
						<div className="p-md-2 h-100">
							<div className="rounded p-3 p-lg-4 p-lg-5 testimonial h-100">
								<div className="d-flex justify-content-between mb-3">
									<h3>Design Right 1.0&2.0</h3>
									<span className="opacity-2 index">01</span>
								</div>
								<p>
									In conjuction with 5 other amazing Designer Experts, we were able to train about 150 students of the
									University of Ilorin in Product Designs and most of them are now crushing gigs as UI/UX Designers.
								</p>
							</div>
						</div>
						<div className="p-md-2 h-100">
							<div className="rounded p-3 p-lg-4 p-lg-5 testimonial h-100">
								<div className="d-flex justify-content-between mb-3">
									<h3>Design Right 1.0&2.0</h3>
									<span className="opacity-2 index">02</span>
								</div>
								<p>
									In conjuction with 5 other amazing Designer Experts, we were able to train about 150 students of the
									University of Ilorin in Product Designs and most of them are now crushing gigs as UI/UX Designers.
								</p>
							</div>
						</div>
						<div className="p-md-2 h-100">
							<div className="rounded p-3 p-lg-4 p-lg-5 testimonial h-100">
								<div className="d-flex justify-content-between mb-3">
									<h3>Design Right 1.0&2.0</h3>
									<span className="opacity-2 index">03</span>
								</div>
								<p>
									In conjuction with 5 other amazing Designer Experts, we were able to train about 150 students of the
									University of Ilorin in Product Designs and most of them are now crushing gigs as UI/UX Designers.
								</p>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default More;
