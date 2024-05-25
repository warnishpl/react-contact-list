import { InputWrapper, Input } from './SearchInput.styles.js';

export function SearchInput() {
	return (
		<>
			<InputWrapper>
				<Input type='search' placeholder='Wyszukaj kontakt' />
			</InputWrapper>
		</>
	);
}
