import React, { useEffect, useState, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMoviesHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(
				"https://react-http-4888a-default-rtdb.firebaseio.com/movies.json"
			);
			if (!response.ok) {
				throw new Error("Something went wrong!!");
			}

			const movies = await response.json();

			const updatedMovies = Object.keys(movies).map((movieId) => ({
				...movies[movieId],
				id: movieId,
			}));

			setMovies(updatedMovies);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	}, []);

	/* For fetching the data from the API on mounting */
	useEffect(() => {
		fetchMoviesHandler();
	}, [fetchMoviesHandler]);

	// To send the data to the backend API
	const addMovieHandler = async (movieData) => {
		try {
			const response = await fetch(
				"https://react-http-4888a-default-rtdb.firebaseio.com/movies.json",
				{
					method: "POST",
					body: JSON.stringify(movieData),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			if (!response.ok) {
				throw new Error("Something went wrong!!");
			}

			const data = await response.json();
			console.log(data);
			fetchMoviesHandler();
		} catch (e) {
			console.log(e);
		}
	};

	// Content for showing loading, error or result
	let content = <p>Found no movies</p>;

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	// If we are loading
	if (isLoading) {
		content = <p>Loading...</p>;
	}
	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={addMovieHandler} />
			</section>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;
