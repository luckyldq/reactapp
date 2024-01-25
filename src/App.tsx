import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import Tab from "./components/tabs/tabs";
import Home from "./components/home/home";
import About from "./components/about/about";

function App() {
	const tabIndex = 0;
	return (
		<div className="App">
			<Tab tabindex={tabIndex} />
			{tabIndex === 0 ? <Home /> : <About />}
		</div>
	);
}

export default App;
