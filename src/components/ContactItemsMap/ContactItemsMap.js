import { useContext } from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactsWrapper } from './ContactItemsMap.styles.js';
import { ContactsListContext } from '../../context/contactsListContext.js';
import { isAscendingContext } from '../../context/isAscendingContext.js';

<<<<<<< HEAD
export function ContactItemsMap({
	contactsList,
	setContactsList,
	searchValue,
	isAscending,
}) {
=======
export function ContactItemsMap({ searchValue }) {
	const isAscendingContextValue = useContext(isAscendingContext);
	const ContactsListContextValue = useContext(ContactsListContext);
>>>>>>> develop
	const lowerCaseSearchValue = searchValue.toLowerCase();
	const filteredContactsList = ContactsListContextValue.contactsList.filter(
		(contact) =>
			contact.name.toLowerCase().includes(lowerCaseSearchValue) ||
			contact.phone.includes(searchValue)
	);
	const sortedContactsList = filteredContactsList.sort((a, b) => {
		if (a.name.toLowerCase() < b.name.toLowerCase()) {
			return isAscendingContextValue.isAscending ? -1 : 1;
		}
		if (a.name.toLowerCase() > b.name.toLowerCase()) {
			return isAscendingContextValue.isAscending ? 1 : -1;
		}
		return 0;
	});

	return (
		<ContactsWrapper>
			{sortedContactsList.map((element) => (
<<<<<<< HEAD
				<ContactItem
					setContactsList={setContactsList}
					personalData={element}
					id={element.id} // jak zastapic ID na key
					key={element.id} // w DeleteButton.js ??
				/>
=======
				<ContactItem personalData={element} key={element.id} />
>>>>>>> develop
			))}
		</ContactsWrapper>
	);
}
