import { ReactComponent as AddIcon } from '../../assets/add-icon.svg';
import { Wrapper, Button, P } from './AddContactButton.styles.js';
// import { AddContactForm } from './../AddContactForm/AddContactForm.js';

export function AddContactButton({ onClick }) {
	return (
		<Wrapper>
			<Button onClick={onClick}>
				<AddIcon />
				<P>Dodaj kontakt</P>
			</Button>
		</Wrapper>
	);
}
