import { useState } from 'react';
import { countries } from '../../helpers/countries';
import { Wrapper, Li } from './PrefixLiMap.styles.js';

export function PrefixLiMap({ setIsDropdownShown, setPhoneValue }) {
	const [isFlagSelected, setIsFlagSelected] = useState(false);
	function flagHandler(phone) {
		setIsFlagSelected(!isFlagSelected);
		setIsDropdownShown(false);
		setPhoneValue(phone);
	}
	return (
		<Wrapper>
			<ul>
				{countries.map((country) => (
					<Li key={country.flag} onClick={() => flagHandler(country.phone)}>
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
