import React from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

import useHttp from "../../http/use-http";

const NewTask = (props) => {
	const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

	const createTask = (taskText, data) => {
		const generatedId = data.name;
		const createdTask = { id: generatedId, text: taskText };

		props.onAddTask(createdTask);
	};

	const enterTaskHandler = async (taskText) => {
		sendTaskRequest(
			{
				url: "https://react-http-4888a-default-rtdb.firebaseio.com/tasks.json",
				method: "POST",
				body: JSON.stringify({ text: taskText }),
				headers: {
					"Content-Type": "application/json",
				},
			},
			createTask.bind(null, taskText)
		);
	};

	return (
		<Section>
			<TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
			{error && <p>{error}</p>}
		</Section>
	);
};

export default NewTask;
