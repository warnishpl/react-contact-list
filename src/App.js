import { Main } from './App.style.js';
import { AddContactButton } from './components/AddContactButton/AddContactButton.js';
import { ContactsHeader } from './components/ContactsHeader/ContactsHeader.js';
import { SearchInput } from './components/SearchInput/SearchInput.js';
// import { State } from './components/State/State.js';
import { ContactItemsMap } from './components/ContactItemsMap/ContactItemsMap.js';
import { AddContactForm } from './components/AddContactForm/AddContactForm.js';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { blueDark } from './styles/theme.js';
import { SetGlobalStyle } from './styles/GlobalStyles.js';
// import { Tasks } from './components/Tasks/Tasks';

function App() {
	const [isAddContactButtonClicked, setIsAddContactButtonClicked] =
		useState(false);
	const handleAddContactButtonClick = () => {
		setIsAddContactButtonClicked(!isAddContactButtonClicked);
	};
	const [contactsList, setContactsList] = useState([
		{
			id: '1',
			name: 'Ayla Meland',
			phone: '21763438',
			picture: 'https://randomuser.me/api/portraits/med/women/41.jpg',
		},
		{
			id: '2',
			name: 'Emma Kuusisto',
			phone: '08-489-046',
			picture: 'https://randomuser.me/api/portraits/med/women/67.jpg',
		},
		{
			id: '3',
			name: 'Siddharth Bangera',
			phone: '8462139119',
			picture: 'https://randomuser.me/api/portraits/med/men/37.jpg',
		},
		{
			id: '4',
			name: 'Olesya Kapustyanskiy',
			phone: '(066) C90-6270',
			picture: 'https://randomuser.me/api/portraits/med/women/59.jpg',
		},
		{
			id: '5',
			name: 'Ruby Li',
			phone: '(350)-806-8254',
			picture: 'https://randomuser.me/api/portraits/med/women/76.jpg',
		},
		{
			id: '6',
			name: 'Ingo Cardoso',
			phone: '(64) 6321-4208',
			picture: 'https://randomuser.me/api/portraits/med/men/26.jpg',
		},
		{
			id: '7',
			name: 'Ria da Conceição',
			phone: '(15) 7772-6293',
			picture: 'https://randomuser.me/api/portraits/med/women/90.jpg',
		},
		{
			id: '8',
			name: 'Paola Melo',
			phone: '(42) 9146-3180',
			picture: 'https://randomuser.me/api/portraits/med/women/23.jpg',
		},
		{
			id: '9',
			name: 'Kathy Watts',
			phone: '031-363-8332',
			picture: 'https://randomuser.me/api/portraits/med/women/27.jpg',
		},
		{
			id: '10',
			name: 'علی نجاتی',
			phone: '066-76025733',
			picture: 'https://randomuser.me/api/portraits/med/men/3.jpg',
		},
	]);
	// return <Tasks />;

	if (!localStorage.getItem('contacts')) {
		localStorage.setItem('contacts', JSON.stringify([])); // JSON.stringify([]]))
	}

	useEffect(() => {
		const localstorage = JSON.parse(localStorage.getItem('contacts'));
		setContactsList(localstorage);
	}, []); //[] <= wywola sie przy 1. renderze
	function updateLocalStorage(arr) {
		localStorage.setItem('contacts', JSON.stringify(arr));
	}

	
	return (
		<ThemeProvider theme={blueDark}>
			<Main>
				<SetGlobalStyle />
				<SearchInput />
				<AddContactButton onClick={handleAddContactButtonClick} />
				<ContactsHeader />
				<ContactItemsMap
					contactsList={contactsList}
					setContactsList={setContactsList}
					updateLocalStorage={updateLocalStorage}
				/>
				{isAddContactButtonClicked && (
					<AddContactForm
						contactsList={contactsList}
						setContactsList={setContactsList}
						onClose={handleAddContactButtonClick}
						updateLocalStorage={updateLocalStorage}
					/>
				)}
			</Main>
		</ThemeProvider>
	);
}

export default App;
