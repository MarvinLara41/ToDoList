import React, { Component } from 'react';
import ToDoItem from './toDoItem';
export default class ToDoList extends Component {
	render() {
		const { items, clearList, handleDelete, handleEdit } = this.props;

		// must PROP DRILL handleDelete method to ToDoItem must pass to component
		return (
			<ul className="list-group my-5">
				<h3 className="text-capitalize text-center">todo list</h3>

				{items &&
					items.map(item => {
						return (
							<ToDoItem
								key={item.id}
								title={item.title}
								handleDelete={() => handleDelete(item.id)}
								handleEdit={() => handleEdit(item.id)}
							/>
						);
					})}
				<button
					type="button"
					className="btn btn-danger btn-block text-capitalize mt-5"
					onClick={clearList}
				>
					Clear list
				</button>
			</ul>
		);
	}
}
