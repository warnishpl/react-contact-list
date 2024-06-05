import { ContactItem } from '../ContactItem/ContactItem';
import { ContactsWrapper } from './ContactItemsMap.styles.js';

export function ContactItemsMap({
	contactsList,
	setContactsList,
	updateContactsInLocalStorage,
	searchValue,
}) {
	const lowerCaseSearchValue = searchValue.toLowerCase();
	const filteredContactsList = contactsList.filter(
		(contact) =>
			contact.name.toLowerCase().includes(lowerCaseSearchValue) ||
			contact.phone.includes(searchValue)
	);

	return (
		<ContactsWrapper>
			{filteredContactsList.map((element) => (
				<ContactItem
				setContactsList={setContactsList}
				updateContactsInLocalStorage={updateContactsInLocalStorage}
				personalData={element}
				id={element.id} // jak zastapic ID na key
				key={element.id} // w DeleteButton.js ??
				/>
			))}
		</ContactsWrapper>
	);
}
