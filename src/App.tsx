import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.scss";

// components
import Tab from "./components/tabs/tabs";
import Home from "./components/home/home";
import About from "./components/about/about";

function App() {
	// tabIndex -- 是state状态值
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<>
			<div className="App">
				<Tab tabindex={tabIndex} setTabIndex={setTabIndex} />
				{tabIndex === 0 ? <Home /> : <About />}
			</div>
		</>
	);
}

export default App;

export async function loader({ params }: { params: any }) {
	console.log(params, "app loader");
	return { contact: "app" };
}

export async function action({ params }: { params: any }) {
	console.log(params, "app action");
	return { contact: "app" };
}
