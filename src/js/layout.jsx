import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import { People } from "./views/People.jsx";
import { Planets } from "./views/Planets.jsx";
import { DetailsPlanets } from "./views/DetailsPlanets.jsx";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

// people: https://starwars-visualguide.com/assets/img/characters/1.jpg
// host = "https://starwars-visualguide.com/assets/img/"
// category = { "people": "characters" }
// id = #
// ext = ".jpg"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/people" element={<People />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:theid" element={<DetailsPlanets />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
