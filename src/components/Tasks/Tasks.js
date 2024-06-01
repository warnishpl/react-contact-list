import { useEffect, useState } from 'react';

export const Tasks = () => {
	const [inputValue, setInputValue] = useState('');
	const [tasksList, setTasksList] = useState([
		{
			id: '1',
			title: 'P',
		},
		{
			id: '2',
			title: 'sfhgj',
		},
	]);
	function updateLocalStorage(arr) {
		localStorage.setItem('tasks', JSON.stringify(arr));
	}
	function handlerInputValue(event) {
		setInputValue(event.target.value);
	}
	function addTask() {
		setTasksList((prev) => {
			const updatedTaskLists = [
				{
					id: Date.now(),
					title: inputValue,
				},
				...prev,
			];
			updateLocalStorage(updatedTaskLists);
			return updatedTaskLists;
		});
	}

	function deleteTask(id) {
		setTasksList((prev) => {
			const updatedTasksList = prev.filter((el) => el.id !== id);
			updateLocalStorage(updatedTasksList);
			return updatedTasksList;
		});
	}

	useEffect(() => {
		const localstorage = JSON.parse(localStorage.getItem('tasks'));
		setTasksList(localstorage);
	}, []); //[] <= wywola sie przy 1. renderze

	return (
		<>
			<h1>Taski</h1>
			<input defaultValue={inputValue} onChange={handlerInputValue}></input>
			<button type='submit' onClick={addTask}>
				dodaj
			</button>
			<div>
				{tasksList.map(({ id, title }) => (
					<div key={id}>
						{title}
						<button onClick={() => deleteTask(id)}>X</button>
						<br />
					</div>
				))}
			</div>
		</>
	);
};
