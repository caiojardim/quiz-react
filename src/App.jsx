import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="container">
				<Switch>
					<Route path="/quiz">
						<Quiz />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
