import {SetGlobalStyle, Main} from './App.style.js';
import { AddContactButton } from './components/AddContactButton/AddContactButton.jsx';
import { ContactsHeader } from './components/ContactsHeader/ContactsHeader.jsx';
import { SearchInput } from './components/SearchInput/SearchInput.jsx';
// import { State } from './components/State/State.js';
import { ContactItemsMap } from './components/ContactItemsMap/ContactItemsMap.jsx';

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
