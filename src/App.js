import { useContext, useEffect, useState } from 'react';
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
import {
	ContactsListContext,
	ContactsListProvider,
} from './context/contactsListContext.js';
import { IsAscendingProvider } from './context/isAscendingContext.js';

function App() {
	const [searchValue, setSearchValue] = useState('');
	const [theme, setTheme] = useState(
		getLocalStorageValue(LOCALSTORAGE_KEYS.THEME) || blueDark
	);
	const [isAddContactButtonClicked, setIsAddContactButtonClicked] =
		useState(false);
	const handleAddContactButtonClick = () => {
		setIsAddContactButtonClicked(!isAddContactButtonClicked);
	};

	const ContactsListContextValue = useContext(ContactsListContext);

	useEffect(() => {
		ContactsListContextValue.setContactsList(
			getLocalStorageValue(LOCALSTORAGE_KEYS.CONTACTS)
		);

		if (!getLocalStorageValue(LOCALSTORAGE_KEYS.CONTACTS)) {
			setLocalStorgeValue(LOCALSTORAGE_KEYS.CONTACTS, TEMP_CONTACT_DATA); // docelowo []
		}
		if (!getLocalStorageValue(LOCALSTORAGE_KEYS.THEME)) {
			setLocalStorgeValue(LOCALSTORAGE_KEYS.THEME, blueDark);
			setLocalStorgeValue(LOCALSTORAGE_KEYS.THEME_NAME, 'blueDark');
		}
	}, [ContactsListContextValue]); //[] <= wywola sie przy 1. renderze

	return (
		<ThemeProvider theme={theme}>
			<IsAscendingProvider>
				<ContactsListProvider>
					<Main>
						<ThemePicker setTheme={setTheme}></ThemePicker>
						<SetGlobalStyle />
						<SearchInput
							searchValue={searchValue}
							setSearchValue={debounce(setSearchValue)}
						/>
						<AddContactButton onClick={handleAddContactButtonClick} />
						<ContactsHeader />
						<ContactItemsMap searchValue={searchValue} />
						{isAddContactButtonClicked && (
							<AddContactForm onClose={handleAddContactButtonClick} />
						)}
					</Main>
				</ContactsListProvider>
			</IsAscendingProvider>
		</ThemeProvider>
	);
}

export default App;
