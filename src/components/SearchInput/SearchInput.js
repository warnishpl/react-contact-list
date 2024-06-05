import { InputWrapper, Input } from './SearchInput.styles.js';

export function SearchInput({ searchValue, setSearchValue }) {
	return (
		<InputWrapper>
			<Input
				defaultValue={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				type='search'
				placeholder='Wyszukaj kontakt'
			/>
		</InputWrapper>
	);
}
