import { ContactItem } from '../ContactItem/ContactItem';
import { ContactsWrapper } from './ContactItemsMap.styles.js';

export function ContactItemsMap({
	contactsList,
	setContactsList,
	updateLocalStorage,
}) {
	return (
		<ContactsWrapper>
			{contactsList.map((element) => (
				<ContactItem
					setContactsList={setContactsList}
					updateLocalStorage={updateLocalStorage}
					personalData={element}
					id={element.id}
				/>
			))}
		</ContactsWrapper>
	);
}
