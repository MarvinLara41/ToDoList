import React, { Component } from 'react';
import ToDoList from './components/toDoList';
import ToDoInput from './components/toDoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
	state = {
		items: [],
		id: uuidv4(),
		item: '',
		editItem: false
	};

	handleChange = e => {
		this.setState({
			item: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		//submits a new task to the todo list
		const newItem = {
			id: this.state.id,
			title: this.state.item
		};
		// console.log(newItem);
		const updatedItems = [...this.state.items, newItem];

		this.setState({
			items: updatedItems,
			item: '',
			id: uuidv4(),
			editItem: false
		});
	};

	clearList = () => {
		//clears entire list
		this.setState({
			items: []
		});
	};

	handleDelete = id => {
		//deleting each indiv item based on item id using filter that returns every item id besides the one that was selected
		const filteredItems = this.state.items.filter(item => item.id !== id);
		this.setState({
			items: filteredItems
		});
	};
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h3 className="text-capitalize text-center"> todo input </h3>
						<ToDoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
						/>
						<ToDoList
							items={this.state.items}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
