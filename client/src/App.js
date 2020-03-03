import React from 'react';
import ToDoList from './components/toDoList';
import ToDoInput from './components/toDoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import UUID from 'uuid';

function App() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-10 mx-auto col-md-8 mt-4">
					<h3 className="text-capitalize text-center"> todo input </h3>
					<ToDoInput />
					<ToDoList />
				</div>
			</div>
		</div>
	);
}

export default App;
