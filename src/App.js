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
import { debounce } from './utils/helpers/debounce.js';
import { LOCALSTORAGE_KEYS } from './utils/constants/localStorageKeys.js';
import {
	setLocalStorgeValue,
	getLocalStorageValue,
} from './utils/functions/localStorageFunctions.js';
import { TEMP_CONTACT_DATA } from './utils/constants/temp_contact_data.js';
import { NameContextProvider } from './context/NameContext.js';

function App() {
	const [searchValue, setSearchValue] = useState('');
	const [isAscending, setIsAscending] = useState(true);
	const [theme, setTheme] = useState(getLocalStorageValue('theme') || blueDark);
	const [isAddContactButtonClicked, setIsAddContactButtonClicked] =
		useState(false);
	const handleAddContactButtonClick = () => {
		setIsAddContactButtonClicked(!isAddContactButtonClicked);
	};
	const [contactsList, setContactsList] = useState(TEMP_CONTACT_DATA);

	useEffect(() => {
		setContactsList(getLocalStorageValue(LOCALSTORAGE_KEYS.CONTACTS));

		if (!getLocalStorageValue(LOCALSTORAGE_KEYS.CONTACTS)) {
			setLocalStorgeValue(LOCALSTORAGE_KEYS.CONTACTS, TEMP_CONTACT_DATA); // docelowo []
		}
		if (!getLocalStorageValue(LOCALSTORAGE_KEYS.THEME)) {
			setLocalStorgeValue(LOCALSTORAGE_KEYS.THEME, blueDark);
			setLocalStorgeValue(LOCALSTORAGE_KEYS.THEME_NAME, 'blueDark');
		}
	}, []); //[] <= wywola sie przy 1. renderze

	return (
		<ThemeProvider theme={theme}>
			<NameContextProvider>
				<Main>
					<ThemePicker setTheme={setTheme}></ThemePicker>
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
					/>
					{isAddContactButtonClicked && (
						<AddContactForm
							contactsList={contactsList}
							setContactsList={setContactsList}
							onClose={handleAddContactButtonClick}
						/>
					)}
				</Main>
			</NameContextProvider>
		</ThemeProvider>
	);
}

export default App;
