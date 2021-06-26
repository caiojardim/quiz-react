import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CurrentQuest from "../components/quizElements/CurrentQuest";
import { quizes } from "../data/db";
import "./Quiz.css";

function Quiz(props) {
	const params = useParams();
	const quiz = quizes.find((quiz) => quiz.id === params.id);
	const { questions } = quiz;

	const [currentQuestion, setCurrentQuestion] = useState(2);

	function handleAlternativeButtonClick(alternativeId) {}

	return (
		<div className="quiz-container">
			<CurrentQuest quantity={questions.length} current={currentQuestion} />

			{questions.map((question, i) => {
				console.log(question.id);
				if (i + 1 === currentQuestion) {
					return (
						<div key={i}>
							<div className="img-container">
								<img
									className="question-img"
									src={"../" + question.img}
									alt="Img naruto"
								/>
								<div className="question-title">{question.title}</div>
							</div>
							<div className="question-container">
								{question.alternatives.map((alternative) => {
									return (
										<button
											className="alt"
											onClick={() =>
												handleAlternativeButtonClick(alternative.id)
											}
											key={alternative.id}
										>
											{alternative.alt}
										</button>
									);
								})}
							</div>
						</div>
					);
				}
			})}
		</div>
	);
}

export default Quiz;
