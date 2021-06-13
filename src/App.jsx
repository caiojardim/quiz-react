import React from "react";
import "./App.css";
import Header from "./components/templates/Header";
import Quizes from "./components/templates/Quizes";

function App() {
	return (
		<div className="container">
			<Header />
			<Quizes />
		</div>
	);
}

export default App;
