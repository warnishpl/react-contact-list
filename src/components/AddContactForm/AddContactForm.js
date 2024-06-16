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
	ChevronStyled,
	AvatarSign,
	DeleteAvatarIconStyled,
	AddAvatarIconStyled,
	RedP,
} from '../AddContactForm/AddContactForm.styles.js';
import { ReactComponent as BackIcon } from '../../assets/arrow-left.svg';
import { SaveButton } from '../SaveButton/SaveButton';
import { useRef, useState, useCallback } from 'react';
import { CountryDropdownMenu } from '../CountryDropdownMenu/CountryDropdownMenu.js';
import defaultAvatar from '../../assets/default_avatar_black.jpg';
import { setLocalStorgeValue } from '../../utils/functions/localStorageFunctions.js';
import { sizes } from '../../styles/media.js';

export function AddContactForm({ onClose, setContactsList }) {
	const inputRef = useRef(null);
	const [nameValue, setNameValue] = useState('');
	const [phoneValue, setPhoneValue] = useState('');
	const [isDropdownShown, setIsDropdownShown] = useState(false);
	const [prefixValue, setPrefixValue] = useState('+48');
	const [phoneLengthValue, setPhoneLengthValue] = useState(9);
	const [imageSrc, setImageSrc] = useState(null);
	const [nameError, setNameError] = useState(false);
	const [phoneError, setPhoneError] = useState(false);

	// TODO: dane z forumlarza wyciągać po kliknięciu przycisku

	const handleFileChange = useCallback(
		(event) => {
			const file = event.target.files[0];
			if (file) {
				const reader = new FileReader();

				reader.onload = (e) => {
					setImageSrc(e.target.result); // Ustaw stan z wczytanymi danymi pliku
				};

				reader.readAsDataURL(file); // Wczytaj plik jako URL
			}
		},
		[setImageSrc]
	);

	const handlerNameValue = useCallback(
		(event) => setNameValue(event.target.value),
		[]
	);

	const handlerPhoneValue = useCallback(
		(event) => setPhoneValue(event.target.value),
		[]
	);
	const handlerDropdown = useCallback(
		() => setIsDropdownShown((prev) => !prev),
		[]
	);

	const handleAddAvatarIconClick = useCallback(() => {
		inputRef.current.click();
	}, []);
	const resetValues = useCallback(() => {
		setNameValue('');
		setPhoneValue('');
		setPrefixValue('+48');
		setPhoneLengthValue(9);
		setImageSrc(null);
		setNameError(false);
		setPhoneError(false);
		if (window.innerWidth <= sizes.lg) onClose(false);
	}, [onClose]);

	const addNewContact = useCallback(() => {
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
			setLocalStorgeValue('contacts', updatedContactsList);
			resetValues(); //reset
			return updatedContactsList;
		});
	}, [
		imageSrc,
		nameValue,
		phoneValue,
		prefixValue,
		resetValues,
		setContactsList,
	]);

	const validateForm = useCallback(() => {
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
	}, [addNewContact, nameValue, phoneLengthValue, phoneValue]);

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
							<ImagePreview $imageSrc={imageSrc}></ImagePreview>
							<ImgInput
								ref={inputRef}
								type='file'
								accept='image/*'
								onChange={handleFileChange}
							></ImgInput>
						</ImageWrapper>
						<AvatarSign as='button'>
							{!imageSrc ? (
								<AddAvatarIconStyled onClick={handleAddAvatarIconClick} />
							) : (
								<DeleteAvatarIconStyled onClick={() => setImageSrc(null)} />
							)}
						</AvatarSign>
						<InputTitle>
							<p>Nazwa</p>
							{nameError && <RedP>Wprowadź nazwe</RedP>}
						</InputTitle>
						<NameInputField
							name=''
							value={nameValue}
							onChange={handlerNameValue}
							placeholder={`Wprowadz nazwe kontaktu`}
						></NameInputField>
						<InputTitle>
							<p>Numer telefonu</p>
							{phoneError && <RedP>Błędny numer telefonu</RedP>}
						</InputTitle>
						<PhoneInputWrapper $isDropdownShown={isDropdownShown}>
							<PrefixList onClick={handlerDropdown}>
								<p>{prefixValue}</p>
								<ChevronStyled $isDropdownShown={isDropdownShown} />
							</PrefixList>
							<PhoneInputField
								value={phoneValue}
								onChange={handlerPhoneValue}
								placeholder={`Wprowadz ${phoneLengthValue}-cyfrowy numer`}
							></PhoneInputField>
							{isDropdownShown && (
								<CountryDropdownMenu
									setPhoneLengthValue={setPhoneLengthValue}
									setPrefixValue={setPrefixValue}
									setIsDropdownShown={setIsDropdownShown}
									setPhoneValue={setPhoneValue}
								></CountryDropdownMenu>
							)}
						</PhoneInputWrapper>
					</InputsWrapper>

					<SaveButton type='submit' onClick={validateForm}></SaveButton>
				</AddContactBox>
			</AddContactFormWrapper>
		</>
	);
}
