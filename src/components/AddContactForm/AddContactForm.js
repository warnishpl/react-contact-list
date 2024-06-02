import {
	AddContactBox,
	AddContactFormWrapper,
	Background,
	Header,
	IconWrapper,
	ImgInput,
	Input,
	InputTitle,
	InputsWrapper,
} from '../AddContactForm/AddContactForm.styles.js';
import { ReactComponent as BackIcon } from '../../assets/arrow-left.svg';
import { SaveButton } from '../SaveButton/SaveButton';
import { useState } from 'react';

export function AddContactForm({
	onClose,
	contactsList,
	setContactsList,
	updateLocalStorage,
}) {
	const [nameValue, setNameValue] = useState('');
	const [phoneValue, setPhoneValue] = useState('');

	function handlerNameValue(event) {
		setNameValue(event.target.value);
	}
	function handlerPhoneValue(event) {
		setPhoneValue(event.target.value);
	}
	function addNewContact() {
		setContactsList((prev) => {
			const updatedContactsList = [
				{
					id: crypto.randomUUID(),
					name: nameValue,
					phone: phoneValue,
					picture: 'https://randomuser.me/api/portraits/med/men/3.jpg',
				},
				...prev,
			];
			updateLocalStorage(updatedContactsList);
			return updatedContactsList;
		});
	}

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
						
						<ImgInput type='file' accept='image/*'></ImgInput>
						<InputTitle>
							<p>Nazwa</p>
						</InputTitle>
						<Input defaultValue={nameValue} onChange={handlerNameValue}></Input>
						<InputTitle>
							<p>Numer telefonu</p>
						</InputTitle>
						<Input
							defaultValue={phoneValue}
							onChange={handlerPhoneValue}
						></Input>
					</InputsWrapper>
					<SaveButton type='submit' onClick={addNewContact}></SaveButton>
				</AddContactBox>
			</AddContactFormWrapper>
		</>
	);
}
