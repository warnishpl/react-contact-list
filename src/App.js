import { SetGlobalStyle, Main } from './App.style.js';
import { AddContactButton } from './components/AddContactButton/AddContactButton.js';
import { ContactsHeader } from './components/ContactsHeader/ContactsHeader.js';
import { SearchInput } from './components/SearchInput/SearchInput.js';
// import { State } from './components/State/State.js';
import { ContactItemsMap } from './components/ContactItemsMap/ContactItemsMap.js';

function App() {
	return (
		<Main>
			<SetGlobalStyle />
			<SearchInput />
			<AddContactButton />
			<ContactsHeader />
			<ContactItemsMap />
		</Main>
	);
}

export default App;
