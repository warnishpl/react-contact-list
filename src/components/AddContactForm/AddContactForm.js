import {
	AddContactBox,
	AddContactFormWrapper,
	Background,
	Header,
	IconWrapper,
	ImagePreview,
	ImgInput,
	NameInputField,
	PhoneInputWrapper,
	PrefixList,
	PhoneInputField,
	InputTitle,
	InputsWrapper,
	ImageWrapper,
} from '../AddContactForm/AddContactForm.styles.js';
import { ReactComponent as BackIcon } from '../../assets/arrow-left.svg';
import { SaveButton } from '../SaveButton/SaveButton';
import { useState } from 'react';
import { PrefixLiMap } from '../PrefixLiMap/PrefixLiMap.js';
import { ReactComponent as Chevron } from '../../assets/chevron-down.svg';
import defaultAvatar from '../../assets/default_avatar_black.jpg';

// const ChevronStyled = styled(Chevron)

export function AddContactForm({
	onClose,
	setContactsList,
	updateContactsInLocalStorage,
}) {
	const [nameValue, setNameValue] = useState('');
	const [phoneValue, setPhoneValue] = useState('');
	const [isDropdownShown, setIsDropdownShown] = useState(false);
	const [prefixValue, setPrefixValue] = useState('+48');
	const [phoneLengthValue, setPhoneLengthValue] = useState(9);
	const [imageSrc, setImageSrc] = useState(null);
	const [nameError, setNameError] = useState(false);
	const [phoneError, setPhoneError] = useState(false);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onload = (e) => {
				setImageSrc(e.target.result); // Ustaw stan z wczytanymi danymi pliku
			};

			reader.readAsDataURL(file); // Wczytaj plik jako URL
		}
	};
	function handlerNameValue(event) {
		setNameValue(event.target.value);
	}
	function handlerPhoneValue(event) {
		setPhoneValue(event.target.value);
	}
	function handlerDropdown() {
		setIsDropdownShown(!isDropdownShown);
	}
	function validateForm() {
		const reg = new RegExp(`^[0-9+]{${phoneLengthValue}}$`);
		if (nameValue === '') {
			setNameError(true);
			setTimeout(() => {
				setNameError(false);
			}, 1000);
			return;
		} else if (!reg.test(phoneValue)) {
			setPhoneError(true);
			setTimeout(() => {
				setPhoneError(false);
			}, 1000);
			return;
		} else addNewContact();
	}
	function resetValues() {
		setNameValue('');
		setPhoneValue('');
		setPrefixValue('+48');
		setPhoneLengthValue(9);
		setImageSrc(null);
		setNameError(false);
		setPhoneError(false);
	}
	function addNewContact() {
		setContactsList((prev) => {
			const updatedContactsList = [
				{
					id: crypto.randomUUID(),
					name: nameValue,
					prefix: prefixValue,
					phone: phoneValue,
					picture: imageSrc || defaultAvatar,
				},
				...prev,
			];
			updateContactsInLocalStorage(updatedContactsList);
			resetValues(); //reset
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
						<ImageWrapper>
							<ImagePreview
								style={{ backgroundImage: `url(${imageSrc})` }}
							></ImagePreview>
							<ImgInput
								type='file'
								accept='image/*'
								onChange={handleFileChange}
							></ImgInput>
						</ImageWrapper>
						<InputTitle>
							<p>Nazwa</p>
							{nameError && <p style={{ color: 'red' }}>Wprowadź nazwe</p>}
						</InputTitle>
						<NameInputField
							value={nameValue}
							onChange={handlerNameValue}
						></NameInputField>
						<InputTitle>
							<p>Numer telefonu</p>
							{phoneError && (
								<p style={{ color: 'red' }}>Błędny numer telefonu</p>
							)}
						</InputTitle>
						<PhoneInputWrapper>
							<PrefixList onClick={handlerDropdown}>
								<p>{prefixValue}</p>
								<Chevron
									style={{
										width: '16px',
										transition: 'transform 0.3s ease-out',
										transform: isDropdownShown ? 'rotateX(180deg)' : 'none', // jak ostylowac nie-in-line-owo element, ktory nie jest z styled-components>
									}}
								/>
							</PrefixList>
							<PhoneInputField
								value={phoneValue}
								onChange={handlerPhoneValue}
								placeholder={`Wprowadz ${phoneLengthValue}-cyfrowy numer`}
							></PhoneInputField>
							{isDropdownShown && (
								<PrefixLiMap
									setPhoneLengthValue={setPhoneLengthValue}
									setPrefixValue={setPrefixValue}
									setIsDropdownShown={setIsDropdownShown}
									setPhoneValue={setPhoneValue}
								></PrefixLiMap>
							)}
						</PhoneInputWrapper>
					</InputsWrapper>

					<SaveButton type='submit' onClick={validateForm}></SaveButton>
				</AddContactBox>
			</AddContactFormWrapper>
		</>
	);
}
