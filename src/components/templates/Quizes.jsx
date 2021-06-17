import React from "react";
import "./Quizes.css";
import { Link } from "react-router-dom";

function Quizes(props) {
	return (
		<div className="quizes-container">
			<Link to="/quiz/1" className="quizes-card">
				{/* imgs tamanho: 1440 x 1080 */}
				<img src="assets/quizes-imgs/naruto.png" alt="Imagem Naruto" />
				<div>Você realmente conhece o Naruto? </div>
			</Link>
			<Link to="/quiz/2" className="quizes-card">
				<img src="assets/quizes-imgs/goku.jpg" alt="Imagem Goku" />
				<div>Você realmente conhece o Goku? </div>
			</Link>
			<Link to="/quiz/3" className="quizes-card">
				<img src="assets/quizes-imgs/friends.jpg" alt="Imagem Friends" />
				<div>Você realmente conhece o Friends? </div>
			</Link>
		</div>
	);
}

export default Quizes;
