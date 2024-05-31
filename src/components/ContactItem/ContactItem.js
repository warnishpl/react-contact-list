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

export const ContactItem = ({ personalData }) => {
	const { name, phone, picture } = personalData;
	return (
		<ContactItemWrapper>
			<PersonalDataWrapper>
				<PictureWrapper>
					<img src={picture} alt='zdjęcie profilowe'></img>
				</PictureWrapper>
				<NameWrapper>
					<p>{name}</p>
				</NameWrapper>
				<DeleteIconWrapper>
					<DeleteButton />
				</DeleteIconWrapper>

				<PhoneWrapper>
					<p>{phone}</p>
					<CopyButton textToCopy={phone} />
				</PhoneWrapper>
			</PersonalDataWrapper>
		</ContactItemWrapper>
	);
};
