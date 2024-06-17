import { createContext, useState } from 'react';
import { getLocalStorageValue } from '../utils/functions/localStorageFunctions';
import { LOCALSTORAGE_KEYS } from '../utils/constants/localStorageKeys';
import { TEMP_CONTACT_DATA } from '../utils/constants/temp_contact_data';

export const ContactsListContext = createContext({
	contactsList: null,
	setContactsList: () => {},
});

export const ContactsListProvider = ({ children }) => {
	const [contactsList, setContactsList] = useState(
		getLocalStorageValue(LOCALSTORAGE_KEYS.CONTACTS) || TEMP_CONTACT_DATA
	);

	return (
		<ContactsListContext.Provider value={{ contactsList, setContactsList }}>
			{children}
		</ContactsListContext.Provider>
	);
};
