import './App.css';
import styled from 'styled-components';
import { AddContactButton } from './components/AddContactButton/AddContactButton.jsx';
import { ContactsHeader } from './components/ContactsHeader/ContactsHeader.jsx';
import { SearchInput } from './components/SearchInput/SearchInput.jsx';
import { State } from './components/State/State.js';
import { ContactItemsMap } from './components/ContactItemsMap/ContactItemsMap.jsx';

function App() {
	return (
		<Main>
			<SearchInput />
			<AddContactButton />
			<ContactsHeader />
			<ContactItemsMap />
		</Main>
	);
}

const Main = styled.main`
	display: grid;
	grid-template-columns: [margin-left] 30px [content-start] 1fr [content-mid] auto [content-end] 30px [margin-right];
	grid-template-rows: [margin-top] 30px [content-top] 70px [header-top] auto [header-bottom] auto [content-mid] 1fr [content-bottom] 30px [margin-bottom];
	min-width: 350px;

	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: [margin-left] 30px [content-start] auto [content-mid] 60dvw [content-end] 30px [margin-right];
		grid-template-rows: [margin-top] 30px [content-top] 70px [header-top] auto [header-bottom] auto [content-mid] 1fr [content-bottom] 30px [margin-bottom];
	}
`;


export default App;
