import React from "react";
import { useParams } from "react-router-dom";
import CurrentQuest from "../components/quizElements/CurrentQuest";
import { allQuiz } from "../data/db";
import "./Quiz.css";

function Quiz(props) {
	const params = useParams();
	const quiz = allQuiz.find((quiz) => quiz.id === Number(params.id));
	const { questions } = quiz;

	return (
		<div className="quiz-container">
			<CurrentQuest quantity={8} current={3} />

			{questions.map((question, i) => {
				return (
					<div key={i}>
						<div className="img-container">
							<img
								className="question-img"
								src={"../" + question.img}
								alt="Img naruto"
							/>
						</div>
						<div className="question-container">
							<div>{question.title}</div>
							{question.alternatives.map((alternative) => {
								return (
									<button
										className="alt"
										onClick={() => alert("Vrau")}
										key={alternative.id}
									>
										{alternative.alt}
									</button>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Quiz;
