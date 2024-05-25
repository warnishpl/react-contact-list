import { ReactComponent as AddIcon } from '../../assets/add-icon.svg';
import { Wrapper, Button, P } from './AddContactButton.styles.js';

export function AddContactButton() {
	return (
		<Wrapper>
			<Button>
				<AddIcon />
				<P>Dodaj kontakt</P>
			</Button>
		</Wrapper>
	);
}
