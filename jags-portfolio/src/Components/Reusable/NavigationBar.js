import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Squash as Hamburger } from "hamburger-react";

const NavigationBar = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="navigation">
			<div className="container-fluid fixed mb-n1">
				<div className="container px-0">
					<nav className="navbar navbar-expand-md px-0 bg-transparent py-md-3">
						<NavLink activeClassName="active" className="navbar-brand py-2 py-md-auto font-weight-bold text-green" to="/">
							Adegoke.Design
						</NavLink>
						<button
							className="navbar-toggler d-lg-none p-0"
							type="button"
							data-toggle="collapse"
							data-target="#collapsibleNavId"
							aria-controls="collapsibleNavId"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<Hamburger toggled={isOpen} toggle={setOpen} color="#10b381" />
						</button>
						<div className="collapse navbar-collapse w-100" id="collapsibleNavId">
							<ul className="navbar-nav mr-2 mr-md-auto mt-2 mt-lg-0 w-100 d-flex justify-content-end">
								<li className="nav-item active">
									<NavLink
										activeClassName="active"
										className="nav-link py-3 py-md-auto text-white mr-md-3 text-right text-md-left"
										to="/about"
									>
										About
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink
										activeClassName="active"
										className="nav-link py-3 py-md-auto text-white mx-md-3 text-right text-md-left"
										to="/work"
									>
										Works
									</NavLink>
								</li>
								<li className="nav-item">
									<NavHashLink
										className="nav-link py-3 py-md-auto text-white ml-md-3 text-right text-md-left"
										smooth
										to="#contact"
										activeClassName="active"
									>
										Contact
									</NavHashLink>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default NavigationBar;
