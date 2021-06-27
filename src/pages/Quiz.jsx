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
		red: null,
		green: null,
	});
	const [answersList, setAnswersList] = useState([]);

	function calculateCorrectAnswers(answersList) {
		const correctAnswers = answersList.reduce((corrects, answer) => {
			if (answer[1] === true) {
				return corrects + 1;
			} else {
				return corrects;
			}
		}, 0);
		return correctAnswers;
	}

	function changeButtonColors(alternativeId, questionAnswer) {
		if (alternativeId === questionAnswer) {
			setClassButtonColors({
				red: null,
				green: alternativeId,
			});
		} else {
			setClassButtonColors({
				red: alternativeId,
				green: questionAnswer,
			});
		}
	}

	function handleAlternativeButtonClick(
		alternativeId,
		questionAnswer,
		questionId
	) {
		const answerIsCorrent = alternativeId === questionAnswer ? true : false;
		setAnswersList([...answersList, [questionId, answerIsCorrent]]);
		changeButtonColors(alternativeId, questionAnswer);
		setTimeout(() => {
			setCurrentQuestion((current) => current + 1);
			setClassButtonColors({
				red: null,
				green: null,
			});
		}, [500]);
	}

	return (
		<div className="quiz-container">
			<CurrentQuest quantity={questions.length} current={currentQuestion} />
			{questions.map((question, i) => {
				return (
					<div key={i}>
						{question.id === currentQuestion && (
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
														question.answer,
														question.id
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
						)}
					</div>
				);
			})}
			{currentQuestion > questions.length && (
				<div>
					<h1>Você acertou {calculateCorrectAnswers(answersList)} questões</h1>
					<button>Refazer</button>
				</div>
			)}
		</div>
	);
}

export default Quiz;
