import { useState } from 'react';
import { countries } from '../../helpers/countries';
import { Wrapper, Li } from './PrefixLiMap.styles.js';
import flags from '../../utils/functions/flags.js';

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
							src={flags[country.flag]}
							alt={country.label}
							style={{ height: '20px' }}
						/>
						{`${country.phone} ${country.label}`}
					</Li>
				))}
			</ul>
		</Wrapper>
	);
}
