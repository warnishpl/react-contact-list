import { createContext, useState } from 'react';
import { getLocalStorageValue } from '../utils/functions/localStorageFunctions';
import { LOCALSTORAGE_KEYS } from '../utils/constants/localStorageKeys';

export const ContactsListContext = createContext({
	contactsList: null,
	setContactsList: () => {},
});

export const ContactsListProvider = ({ children }) => {
	const [contactsList, setContactsList] = useState(
		getLocalStorageValue(LOCALSTORAGE_KEYS.CONTACTS)
	);

	return (
		<ContactsListContext.Provider value={{ contactsList, setContactsList }}>
			{children}
		</ContactsListContext.Provider>
	);
};
