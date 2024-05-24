import './State.styles.css';
import { useState, useMemo, useCallback, useEffect } from 'react';

console.log('hello');

const requestToAPI = () => '16 stopni';

const handleResize = () => {};

export function State({ name }) {
	const [counter, setCounter] = useState(0);
	const [deg, setDeg] = useState(null);
	const [city, setCity] = useState(null);

	// const NAME = useMemo(() => `imię: ${name}`, [name]);
	const add = () => {
		// przy zmiananie stanu na bazie stanu poprzedniego
		setCounter((prev) => prev + 1);
	};
	const odd = () => {
		setCounter((prev) => prev - 1);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [city]);

	return (
		<>
			<input />
			<button onClick={add}>+</button>
			<button onClick={odd}>-</button>
			<h1>{counter}</h1>
			{deg && <h1>ilość: {deg}</h1>}
		</>
	);
}
