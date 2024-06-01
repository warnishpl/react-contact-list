import { Main } from './App.style.js';
import { AddContactButton } from './components/AddContactButton/AddContactButton.js';
import { ContactsHeader } from './components/ContactsHeader/ContactsHeader.js';
import { SearchInput } from './components/SearchInput/SearchInput.js';
// import { State } from './components/State/State.js';
import { ContactItemsMap } from './components/ContactItemsMap/ContactItemsMap.js';
import { AddContactForm } from './components/AddContactForm/AddContactForm.js';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { blueDark} from './styles/theme.js';
import { SetGlobalStyle } from './styles/GlobalStyles.js';
// import { Tasks } from './components/Tasks/Tasks';

function App() {
	const [isAddContactButtonClicked, setIsAddContactButtonClicked] =
		useState(false);
	const handleAddContactButtonClick = () => {
		setIsAddContactButtonClicked(!isAddContactButtonClicked);
	};

	// return <Tasks />;

	return (
		<ThemeProvider theme={blueDark}>
			<Main>
				<SetGlobalStyle />
				<SearchInput />
				<AddContactButton onClick={handleAddContactButtonClick} />
				<ContactsHeader />
				<ContactItemsMap />
				{isAddContactButtonClicked && (
					<AddContactForm onClose={handleAddContactButtonClick} />
				)}
			</Main>
		</ThemeProvider>
	);
}

export default App;
