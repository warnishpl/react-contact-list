import { SortButton } from '../SortButton/SortButton.js';
import { HeaderWrapper, Wrapper } from './ContactsHeader.styles.js';
export function ContactsHeader({ isAscending, setIsAscending }) {

	return (
		<HeaderWrapper>
			<Wrapper>
				<h1>Moje kontakty</h1>
			</Wrapper>

			<SortButton isAscending={isAscending} setIsAscending={setIsAscending} />
		</HeaderWrapper>
	);
}
