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
	updateLocalStorage,
}) => {
	const { name, phone, picture } = personalData;
	const [isExtended, setIsExtended] = useState(false);
	function handlerIsExtended() {
		setIsExtended(!isExtended);
	}
	return (
		<ContactItemWrapper onClick={handlerIsExtended} isExtended={isExtended}>
			<PersonalDataWrapper>
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
						updateLocalStorage={updateLocalStorage}
					/>
				</DeleteIconWrapper>

				<PhoneWrapper>
					<p>{phone}</p>
					<CopyButton textToCopy={phone} />
				</PhoneWrapper>
			</PersonalDataWrapper>
		</ContactItemWrapper>
	);
};
