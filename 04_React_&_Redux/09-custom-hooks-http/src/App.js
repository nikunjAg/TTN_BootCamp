import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./http/use-http";

const REQUEST_CONFIG = {
	url: "https://react-http-4888a-default-rtdb.firebaseio.com/tasks.json",
};

function App() {
	const [tasks, setTasks] = useState([]);

	const tranformTasks = useCallback((tasksKeysObj) => {
		const loadedTasks = Object.keys(tasksKeysObj).map((taskId) => ({
			...tasksKeysObj[taskId],
			id: taskId,
		}));

		setTasks(loadedTasks);
	}, []);

	const { isLoading, error, sendRequest: fetchTasks } = useHttp();

	// Sometimes eslint may not recommend us to add fetchTasks if it was defined here
	// Because maybe react have noticed that we might only be using some state updating function in there
	// and they are guarateed by react to not change
	// react may notice that and not warn us
	// BUT here react doesnot know about fetchTasks(sendRequest) as it is not defined here
	// so we need to add it as a dependency
	useEffect(() => {
		fetchTasks(REQUEST_CONFIG, tranformTasks);
	}, [fetchTasks, tranformTasks]);

	const taskAddHandler = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task));
	};

	return (
		<React.Fragment>
			<NewTask onAddTask={taskAddHandler} />
			<Tasks
				items={tasks}
				loading={isLoading}
				error={error}
				onFetch={fetchTasks.bind(null, REQUEST_CONFIG, tranformTasks)}
			/>
		</React.Fragment>
	);
}

export default App;
