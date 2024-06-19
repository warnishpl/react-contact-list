import { useContext } from 'react';
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg';
import { Wrapper, Button, P } from './AddContactButton.styles.js';
import { AddContactButtonContext } from '../../context/isAddContactButtonClicked.js';

export function AddContactButton() {
	const AddContactButtonContextValue = useContext(AddContactButtonContext);
	return (
		<Wrapper>
			<Button
				onClick={AddContactButtonContextValue.handleAddContactButtonClick}
			>
				<AddIcon />
				<P>Dodaj kontakt</P>
			</Button>
		</Wrapper>
	);
}
