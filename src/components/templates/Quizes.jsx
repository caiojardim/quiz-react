import React from "react";
import "./Quizes.css";

function Quizes(props) {
	return (
		<div className="quizes-container">
			<a href="#" className="quizes-card">
				<img
					src="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
					alt="Imagem Naruto"
				/>
				<div>Você realmente conhece o Naruto? </div>
			</a>
		</div>
	);
}

export default Quizes;
