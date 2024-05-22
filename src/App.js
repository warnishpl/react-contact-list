import './App.css';

function Text({ name }) {
	return (
		<>
			<h1>Hello {name}</h1>
		</>
	);
}

function TextWithChildren({ children }) {
	return (
		<>
			<h1>Hello {children}</h1>
		</>
	);
}
const person = {
	name: 'kacper',
	surname: 'kowalski',
	age: 18,
};
const personList = [
	{
		name: 'kacper',
		surname: 'kowalski',
		age: 18,
	},
	{
		name: 'adam',
		surname: 'milczek',
		age: 22,
	},
	{
		name: 'anna',
		surname: 'adamska',
		age: 60,
	},
];
const Txt = ({ personalData }) => {
	const { name, surname, age } = personalData;
	return (
		<h1>
			czesc {name} {surname}, wiem ze masz {age} lat
		</h1>
	);
};

function App() {
	return (
		<>
			<h1>Lista osób:</h1>
			{personList.map((element) => (
				<Txt personalData={element} key={element.surname} />
			))}
		</>
	);
}

// function App() {
// 	return (
// 		<>
// 			<Text name='Beata' />
// 			<Text name='Kamil' />
// 			<Text name='Anna' />
// 			<Txt personalData={person} />
// 			<TextWithChildren>Kaśka</TextWithChildren>
// 		</>
// 	);
// }

export default App;
