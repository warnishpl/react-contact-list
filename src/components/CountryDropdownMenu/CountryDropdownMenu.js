import { useState } from 'react';
import { COUNTRY_LIST } from '../../utils/constants/country_list.js';
import { Wrapper, Button, Img, P } from './CountryDropdownMenu.styles.js';
import flags from '../../utils/functions/flags.js';

export function CountryDropdownMenu({
	setIsDropdownShown,
	setPhoneLengthValue,
	setPrefixValue,
}) {
	const [isFlagSelected, setIsFlagSelected] = useState(false);
	function flagHandler(phone, phoneLength) {
		setIsFlagSelected(!isFlagSelected);
		setIsDropdownShown(false);
		setPrefixValue(phone);
		setPhoneLengthValue(phoneLength);
	}
	return (
		<Wrapper>
			{COUNTRY_LIST.map((country) => (
				<Button
					key={country.flag}
					onClick={() => flagHandler(country.phone, country.phoneLength)}
				>
					<Img src={flags[country.flag]} alt={country.label} />
					<P>{`${country.phone} ${country.label}`}</P>
				</Button>
			))}
		</Wrapper>
	);
}
