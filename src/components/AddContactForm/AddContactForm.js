import {
	AddContactBox,
	AddContactFormWrapper,
	Background,
	Header,
	IconWrapper,
	Input,
	InputTitle,
	InputsWrapper,
} from '../AddContactForm/AddContactForm.styles.js';
import { ReactComponent as BackIcon } from '../../assets/arrow-left.svg';
import { SaveButton } from '../SaveButton/SaveButton';

export function AddContactForm({ onClose }) {
	return (
		<>
			<Background onClick={onClose}></Background>
			<AddContactFormWrapper>
				<AddContactBox>
					<Header>
						<IconWrapper>
							<BackIcon onClick={onClose} />
						</IconWrapper>
						<p>Dodaj kontakt</p>
					</Header>
					<InputsWrapper>
						<InputTitle>
							<p>Nazwa</p>
						</InputTitle>
						<Input></Input>
						<InputTitle>
							<p>Numer telefonu</p>
						</InputTitle>
						<Input></Input>
					</InputsWrapper>
					<SaveButton></SaveButton>
				</AddContactBox>
			</AddContactFormWrapper>
		</>
	);
}
