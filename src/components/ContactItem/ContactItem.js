import { CopyButton } from '../CopyButton/CopyButton.js';
import { DeleteButton } from '../DeleteButton/DeleteButton.js';
import {ContactItemWrapper, PictureWrapper, PersonalDataWrapper, Wrapper, FirstLineWrapper, SecondLineWrapper} from './ContactItem.styles.js';

export const ContactItem = ({ personalData }) => {
	const { name, phone, picture } = personalData;
	return (
		<ContactItemWrapper>
			<PictureWrapper>
				<img src={picture} alt='zdjęcie profilowe'></img>
			</PictureWrapper>
			<PersonalDataWrapper>
				<FirstLineWrapper>
					<Wrapper>
						<p>{name}</p>
					</Wrapper>
					<DeleteButton />
				</FirstLineWrapper>
				<SecondLineWrapper>
					<Wrapper>
						<p>{phone}</p>
					</Wrapper>
					<CopyButton />
				</SecondLineWrapper>
			</PersonalDataWrapper>
		</ContactItemWrapper>
	);
};
