import { ContactItem } from '../ContactItem/ContactItem';
import { ContactsWrapper } from './ContactItemsMap.styles.js';

export function ContactItemsMap({
	contactsList,
	setContactsList,
	updateContactsInLocalStorage,
}) {
	return (
		<ContactsWrapper>
			{contactsList.map((element) => (
				<ContactItem
					setContactsList={setContactsList}
					updateContactsInLocalStorage={updateContactsInLocalStorage}
					personalData={element}
					id={element.id}
				/>
			))}
			
		</ContactsWrapper>
	);
}
