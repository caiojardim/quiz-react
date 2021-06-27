import React from "react";
import "./CurrentQuest.css";
import cx from "classname";

function CurrentQuest(props) {
	function generateRange(n) {
		return Array.from({ length: n }, (_, i) => i + 1);
	}

	const quantity = generateRange(props.quantity);

	return (
		<div className="numbers-container">
			{quantity.map((number, index) => {
				return (
					<div
						key={number}
						className={cx(
							"number",
							{ current: number === props.current },
							{
								green: props.answersList[index]
									? props.answersList[index][1]
									: "",
							},
							{
								red: props.answersList[index]
									? !props.answersList[index][1]
									: "",
							}
						)}
					>
						{number}
					</div>
				);
			})}
		</div>
	);
}

export default CurrentQuest;
