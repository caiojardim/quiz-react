import React from "react";
import "./CurrentQuest.css";

function CurrentQuest(props) {
	function generateRange(n) {
		return Array.from({ length: n }, (_, i) => i + 1);
	}

	const quantity = generateRange(props.quantity);

	return (
		<div className="numbers-container">
			{quantity.map((number) => {
				if (number === props.current) {
					return (
						<div key={number} className="number current">
							{number}
						</div>
					);
				}
				return (
					<div key={number} className="number">
						{number}
					</div>
				);
			})}
		</div>
	);
}

export default CurrentQuest;
