import React, { Component } from 'react';
import ToDoItem from './toDoItem';
export default class ToDoList extends Component {
	render() {
		return (
			<ul className="list-group my-5">
				<h3 className="text-capitalize text-center">todo list</h3>
				<ToDoItem />
				<button
					type="button"
					className="btn btn-danger btn-block text-capitalize mt-5"
				>
					Clear list
				</button>
			</ul>
		);
	}
}
