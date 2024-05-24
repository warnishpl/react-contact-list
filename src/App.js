import './App.css';

import { AddContactButton } from './components/AddContactButton/AddContactButton.jsx';
import { ContactsHeader } from './components/ContactsHeader/ContactsHeader.jsx';
import { SearchInput } from './components/SearchInput/SearchInput.jsx';
import { State } from './components/State/State.js';
import { ContactItemsMap } from './components/ContactItemsMap/ContactItemsMap.jsx';

function App() {
	return (
		<main>
			<SearchInput />
			<AddContactButton />
			<ContactsHeader />
			<ContactItemsMap />
		</main>
	);
}

export default App;
