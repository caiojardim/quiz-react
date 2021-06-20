import React from "react";
import "./Quizes.css";
import { Link } from "react-router-dom";
import { quizes } from "../../data/db";

function Quizes(props) {
	return (
		<div className="quizes-container">
			{quizes.map((quiz, i) => {
				return (
					<Link to={`/quiz/${quiz.id}`} className="quizes-card" key={i}>
						{/* imgs tamanho: 1440 x 1080 */}
						<img src={quiz.img} alt={quiz.title} />
						<div>{quiz.title}</div>
					</Link>
				);
			})}
		</div>
	);
}

export default Quizes;
