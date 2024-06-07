import { useState } from 'react';
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

export const ContactItem = ({
	personalData,
	setContactsList,
	id,
	updateContactsInLocalStorage,
}) => {
	const { name, prefix, phone, picture } = personalData;
	const [isExtended, setIsExtended] = useState(false);
	function handlerIsExtended() {
		setIsExtended(!isExtended);
	}
	return (
		<ContactItemWrapper onClick={handlerIsExtended} $isExtended={isExtended}>
			<PersonalDataWrapper $isExtended={isExtended}>
				<PictureWrapper>
					<img src={picture} alt='zdjęcie profilowe'></img>
				</PictureWrapper>
				<NameWrapper>
					<p>{name}</p>
				</NameWrapper>
				<DeleteIconWrapper>
					<DeleteButton
						id={id}
						setContactsList={setContactsList}
						updateContactsInLocalStorage={updateContactsInLocalStorage}
					/>
				</DeleteIconWrapper>

				<PhoneWrapper>
					<p>{prefix} {phone}</p>
					<CopyButton textToCopy={phone} />
				</PhoneWrapper>
			</PersonalDataWrapper>
		</ContactItemWrapper>
	);
};
