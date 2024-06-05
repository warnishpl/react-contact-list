import { useState } from 'react';
import { countries } from '../../helpers/countries';
import { Wrapper, Li } from './PrefixLiMap.styles.js';

export function PrefixLiMap({
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
			<ul>
				{countries.map((country) => (
					<Li
						key={country.flag}
						onClick={() => flagHandler(country.phone, country.phoneLength)}
					>
						<img
							src={`../../assets/flags/${country.flag}.png`}
							alt={country.label}
							style={{ width: '20px', height: '20px' }}
						/>
						{`${country.phone} ${country.label}`}
					</Li>
				))}
			</ul>
		</Wrapper>
	);
}
