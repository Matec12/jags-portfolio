import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Work from "./Components/Work";

import "./styles.css";

ReactDOM.render(
	<React.Fragment>
		<BrowserRouter>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/about" component={About} />
			<Route exact path="/work" component={Work} />
		</BrowserRouter>
	</React.Fragment>,
	document.getElementById("root")
);
