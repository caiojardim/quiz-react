import React from "react";
import { useParams } from "react-router-dom";

function Quiz(props) {
	const params = useParams();
	return <div>Quiz {params.id}</div>;
}

export default Quiz;
