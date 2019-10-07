import React from 'react';
import TodoComponent from './TodoComponent';

function MainContent () {
	return (
		<div className="todo-list">
			<TodoComponent />
			<TodoComponent />
			<TodoComponent />
		</div>
	);
}

export default MainContent;