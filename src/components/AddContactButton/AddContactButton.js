import { useState } from 'react';
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg';
import {
	Wrapper,
	Button,
	P,
	AddContactFormWrapper,
	AddContactBox,
	Header,
	Background,
	InputsWrapper,
	InputTitle,
	Input,
} from './AddContactButton.styles.js';
import { SaveButton } from '../SaveButton/SaveButton.js';
// import { AddContactForm } from './../AddContactForm/AddContactForm.js';

export function AddContactButton() {
	const [isAddFormShown, setIsAddFormShown] = useState(false);
	function ShowAddContactForm() {
		setIsAddFormShown(!isAddFormShown);
		console.log('a');
	}
	return (
		<>
			<Wrapper>
				<Button onClick={ShowAddContactForm}>
					<AddIcon />
					<P>Dodaj kontakt</P>
				</Button>
			</Wrapper>
			{isAddFormShown && (
				<>
					<Background onClick={ShowAddContactForm}></Background>
					<AddContactFormWrapper>
						<AddContactBox>
							<Header>
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
			)}
		</>
	);
}
