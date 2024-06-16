import { useCallback, useContext, useState } from 'react';
import { CopyButton } from '../CopyButton/CopyButton.js';
import { DeleteButton } from '../DeleteButton/DeleteButton.js';
import {
	ContactItemWrapper,
	PictureWrapper,
	PersonalDataWrapper,
	NameWrapper,
	PhoneWrapper,
	DeleteIconWrapper,
} from './ContactItem.styles.js';
import { setLocalStorgeValue } from '../../utils/functions/localStorageFunctions.js';
import { LOCALSTORAGE_KEYS } from '../../utils/constants/localStorageKeys.js';
import { ContactsListContext } from '../../context/contactsListContext.js';

export const ContactItem = ({ personalData }) => {
	const { name, prefix, phone, picture } = personalData;
	const [isExtended, setIsExtended] = useState(false);
	function handlerIsExtended() {
		setIsExtended((prev) => !prev);
	}
	const ContactsListContextValue = useContext(ContactsListContext);

	const deleteContact = useCallback(() => {
		ContactsListContextValue.setContactsList((prev) => {
			const updatedContactsList = prev.filter(
				(el) => el.id !== personalData.id
			);
			setLocalStorgeValue(LOCALSTORAGE_KEYS.CONTACTS, updatedContactsList);
			return updatedContactsList;
		});
	}, [ContactsListContextValue, personalData.id]);

	return (
		<ContactItemWrapper onClick={handlerIsExtended} $isExtended={isExtended}>
			<PersonalDataWrapper $isExtended={isExtended}>
				<PictureWrapper $isExtended={isExtended}>
					<img src={picture} alt='zdjęcie profilowe'></img>
				</PictureWrapper>
				<NameWrapper $isExtended={isExtended}>
					<p>{name}</p>
				</NameWrapper>
				<DeleteIconWrapper>
					<DeleteButton onClick={deleteContact} />
				</DeleteIconWrapper>

				<PhoneWrapper $isExtended={isExtended}>
					<p>
						{prefix} {phone}
					</p>
					<CopyButton textToCopy={phone} />
				</PhoneWrapper>
			</PersonalDataWrapper>
		</ContactItemWrapper>
	);
};
