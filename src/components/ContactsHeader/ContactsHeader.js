import { SortButton } from '../SortButton/SortButton.js';
import { HeaderWrapper, Wrapper } from './ContactsHeader.styles.js';
export function ContactsHeader() {

	return (
		<HeaderWrapper>
			<Wrapper>
				<h1>Moje kontakty</h1>
			</Wrapper>

			<SortButton/>
		</HeaderWrapper>
	);
}
