import { useEffect, useState } from 'react';
import { SetGlobalStyle } from './styles/GlobalStyles.js';
import { ThemeProvider } from 'styled-components';
import { blueDark } from './styles/theme.js';
import { Main } from './App.style.js';
import { AddContactButton } from './components/AddContactButton/AddContactButton.js';
import { ContactsHeader } from './components/ContactsHeader/ContactsHeader.js';
import { SearchInput } from './components/SearchInput/SearchInput.js';
import { ContactItemsMap } from './components/ContactItemsMap/ContactItemsMap.js';
import { AddContactForm } from './components/AddContactForm/AddContactForm.js';
import { ThemePicker } from './components/ThemePicker/ThemePicker.js';
import { debounce } from './helpers/debounce.js';
import { LOCALSTORAGE_KEYS } from './utils/constants/localStorageKeys.js';
import {
	updateContactsInLocalStorage,
	updateThemeInLocalStorage,
	updateThemeNameInLocalStorage,
	setLocalStorgeValue,
	getLocalStorageValue,
} from './helpers/localStorageFunctions.js';

const DEFAULT_CONTACT_DATA = [
	{
		id: '1',
		name: 'Ayla Meland',
		prefix: null,
		phone: '21763438',
		picture: 'https://randomuser.me/api/portraits/med/women/41.jpg',
	},
	{
		id: '2',
		name: 'Emma Kuusisto',
		prefix: null,
		phone: '08-489-046',
		picture: 'https://randomuser.me/api/portraits/med/women/67.jpg',
	},
	{
		id: '3',
		name: 'Siddharth Bangera',
		prefix: null,
		phone: '8462139119',
		picture: 'https://randomuser.me/api/portraits/med/men/37.jpg',
	},
	{
		id: '4',
		name: 'Olesya Kapustyanskiy',
		prefix: '(066)',
		phone: 'C90-6270',
		picture: 'https://randomuser.me/api/portraits/med/women/59.jpg',
	},
	{
		id: '5',
		name: 'Ruby Li',
		prefix: '(350)',
		phone: '806-8254',
		picture: 'https://randomuser.me/api/portraits/med/women/76.jpg',
	},
	{
		id: '6',
		name: 'Ingo Cardoso',
		prefix: '(64)',
		phone: '6321-4208',
		picture: 'https://randomuser.me/api/portraits/med/men/26.jpg',
	},
	{
		id: '7',
		name: 'Ria da Conceição',
		prefix: '(15)',
		phone: '7772-6293',
		picture: 'https://randomuser.me/api/portraits/med/women/90.jpg',
	},
	{
		id: '8',
		name: 'Paola Melo',
		prefix: '(42)',
		phone: '9146-3180',
		picture: 'https://randomuser.me/api/portraits/med/women/23.jpg',
	},
	{
		id: '9',
		name: 'Kathy Watts',
		prefix: '031',
		phone: '363-8332',
		picture: 'https://randomuser.me/api/portraits/med/women/27.jpg',
	},
	{
		id: '10',
		name: 'علی نجاتی',
		prefix: '066',
		phone: '76025733',
		picture: 'https://randomuser.me/api/portraits/med/men/3.jpg',
	},
];

function App() {
	const [searchValue, setSearchValue] = useState('');
	const [isAscending, setIsAscending] = useState(true);
	const [theme, setTheme] = useState(
		JSON.parse(localStorage.getItem('theme')) || blueDark
	);
	const [isAddContactButtonClicked, setIsAddContactButtonClicked] =
		useState(false);
	const handleAddContactButtonClick = () => {
		setIsAddContactButtonClicked(!isAddContactButtonClicked);
	};
	const [contactsList, setContactsList] = useState(DEFAULT_CONTACT_DATA);

	useEffect(() => {
		const localstorageContacts = JSON.parse(
			localStorage.getItem(LOCALSTORAGE_KEYS.CONTACTS)
		);
		setContactsList(localstorageContacts);

		if (!getLocalStorageValue(LOCALSTORAGE_KEYS.CONTACTS)) {
			setLocalStorgeValue(LOCALSTORAGE_KEYS.CONTACTS, contactsList); // docelowo JSON.stringify([]]))
		}
		if (!getLocalStorageValue(LOCALSTORAGE_KEYS.THEME)) {
			setLocalStorgeValue(LOCALSTORAGE_KEYS.THEME, blueDark);
			setLocalStorgeValue(LOCALSTORAGE_KEYS.THEME_NAME, 'blueDark');
		}
	}, []); //[] <= wywola sie przy 1. renderze

	return (
		<ThemeProvider theme={theme}>
			<Main>
				<ThemePicker
					setTheme={setTheme}
					updateThemeInLocalStorage={updateThemeInLocalStorage}
					updateThemeNameInLocalStorage={updateThemeNameInLocalStorage}
				></ThemePicker>
				<SetGlobalStyle />
				<SearchInput
					searchValue={searchValue}
					setSearchValue={debounce(setSearchValue)}
				/>
				<AddContactButton onClick={handleAddContactButtonClick} />
				<ContactsHeader
					isAscending={isAscending}
					setIsAscending={setIsAscending}
				/>
				<ContactItemsMap
					isAscending={isAscending}
					searchValue={searchValue}
					contactsList={contactsList}
					setContactsList={setContactsList}
					updateContactsInLocalStorage={updateContactsInLocalStorage}
				/>
				{isAddContactButtonClicked && (
					<AddContactForm
						contactsList={contactsList}
						setContactsList={setContactsList}
						onClose={handleAddContactButtonClick}
						updateContactsInLocalStorage={updateContactsInLocalStorage}
					/>
				)}
			</Main>
		</ThemeProvider>
	);
}

export default App;
