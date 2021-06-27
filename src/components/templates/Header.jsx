import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
	return (
		<Link to="/" className="header">
			<h1>{props.title}</h1>
		</Link>
	);
}

export default Header;
