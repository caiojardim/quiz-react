import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CurrentQuest from "../components/quizElements/CurrentQuest";
import { quizes } from "../data/db";
import "./Quiz.css";
import cx from "classname";

function Quiz(props) {
	const params = useParams();
	const quiz = quizes.find((quiz) => quiz.id === params.id);
	const { questions } = quiz;

	const [currentQuestion, setCurrentQuestion] = useState(1);
	const [classButtonColors, setClassButtonColors] = useState({
		red: 2,
		green: 3,
	});

	function handleAlternativeButtonClick(alternativeId, questionAnswer) {
		console.log(alternativeId, questionAnswer);
	}

	return (
		<div className="quiz-container">
			<CurrentQuest quantity={questions.length} current={currentQuestion} />

			{questions.map((question, i) => {
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
											className={cx(
												"alt",
												{ red: alternative.id === classButtonColors.red },
												{ green: alternative.id === classButtonColors.green }
											)}
											onClick={() =>
												handleAlternativeButtonClick(
													alternative.id,
													question.answer
												)
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
