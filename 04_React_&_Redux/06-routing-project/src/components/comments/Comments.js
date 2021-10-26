import { useCallback, useEffect, useState } from "react";

import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

import classes from "./Comments.module.css";
import useHttp from "../../hooks/use-http";

const Comments = (props) => {
	const [isAddingComment, setIsAddingComment] = useState(false);
	const {
		status,
		error,
		data: loadedComments,
		sendRequest: fetchComments,
	} = useHttp(getAllComments, true);

	useEffect(() => {
		fetchComments(props.quoteId);
	}, [fetchComments, props.quoteId]);

	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};

	const addedCommentHandler = useCallback(() => {
		fetchComments(props.quoteId);
		setIsAddingComment(false);
	}, [fetchComments, props.quoteId]);

	let comments;

	if (status === "pending") {
		comments = (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		comments = <p className="centered focused">{error}</p>;
	}

	if (
		status === "completed" &&
		!error &&
		(!loadedComments || loadedComments.length === 0)
	) {
		comments = <p className="centered">No comments are added yet.</p>;
	}

	if (
		status === "completed" &&
		!error &&
		loadedComments &&
		loadedComments.length > 0
	) {
		comments = <CommentsList comments={loadedComments} />;
	}

	return (
		<section className={classes.comments}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button className="btn" onClick={startAddCommentHandler}>
					Add a Comment
				</button>
			)}
			{isAddingComment && (
				<NewCommentForm
					quoteId={props.quoteId}
					onAddedComment={addedCommentHandler}
				/>
			)}
			{comments}
		</section>
	);
};

export default Comments;
