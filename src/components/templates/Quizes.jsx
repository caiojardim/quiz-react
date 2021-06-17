import React from "react";
import "./Quizes.css";
import { Link } from "react-router-dom";

function Quizes(props) {
	return (
		<div className="quizes-container">
			<Link to="/quiz" className="quizes-card">
				<img
					src="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
					alt="Imagem Naruto"
				/>
				<div>Você realmente conhece o Naruto? </div>
			</Link>
		</div>
	);
}

export default Quizes;
