import { createContext, useState } from 'react';
import { TEMP_CONTACT_DATA } from '../utils/constants/temp_contact_data';

export const ContactsListContext = createContext({
	contactsList: null,
	setContactsList: () => {},
});

export const ContactsListProvider = ({ children }) => {
	const [contactsList, setContactsList] = useState(TEMP_CONTACT_DATA);

	return (
		<ContactsListContext.Provider value={{ contactsList, setContactsList }}>
			{children}
		</ContactsListContext.Provider>
	);
};
