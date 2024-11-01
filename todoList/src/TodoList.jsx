import * as React from 'react';
import List from '@mui/material/List';
import TodoElement from './TodoElement.jsx'
import TodoForm from './TodoForm.jsx'

export default function TodoList() {
	const [list, setList] = React.useState([]);

	const addTodo = (todo) => {
		setList((currList) => {
			return [...currList, {todoEle: todo, checked: false, id: crypto.randomUUID()}]
		})
	}

	const changeTodo = (todo) => {
		setList((currList) => {
			const foundTodo = currList.filter((value) => value.id === todo.id)
			const foundIndx = currList.indexOf(foundTodo)
			const newList = [...currList]
			newList[foundIndx] = todo
			return newList
		})
	}

	const deleteTodo = (todo) => {
		setList((currList) => {
			const foundTodo = currList.filter((value) => value.id === todo.id)
			const foundIndx = currList.indexOf(foundTodo)
			if (foundIndx !== 1) 
				currList.splice(foundIndx, 1)
			const newList = [...currList]
			return newList
		})
	}

	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{list.map((value, idx) => {
				return <TodoElement todoVal={value} addFunc={changeTodo} deleteFunc={deleteTodo} key={idx}/>
			})}
			<TodoForm addFunc={addTodo}/>
		</List>
	);
}