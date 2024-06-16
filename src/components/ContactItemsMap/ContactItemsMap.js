import { ContactItem } from '../ContactItem/ContactItem';
import { ContactsWrapper } from './ContactItemsMap.styles.js';

export function ContactItemsMap({
	contactsList,
	setContactsList,
	searchValue,
	isAscending,
}) {
	const lowerCaseSearchValue = searchValue.toLowerCase();
	const filteredContactsList = contactsList.filter(
		(contact) =>
			contact.name.toLowerCase().includes(lowerCaseSearchValue) ||
			contact.phone.includes(searchValue)
	);
	const sortedContactsList = filteredContactsList.sort((a, b) => {
		if (a.name.toLowerCase() < b.name.toLowerCase()) {
			return isAscending ? -1 : 1;
		}
		if (a.name.toLowerCase() > b.name.toLowerCase()) {
			return isAscending ? 1 : -1;
		}
		return 0;
	});

	return (
		<ContactsWrapper>
			{sortedContactsList.map((element) => (
				<ContactItem
					setContactsList={setContactsList}
					personalData={element}
					key={element.id} 
					
				/>
			))}
		</ContactsWrapper>
	);
}
