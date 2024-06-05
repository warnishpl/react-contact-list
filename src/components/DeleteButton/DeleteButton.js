import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import './DeleteButton.styles.js';
import { Button } from './DeleteButton.styles.js';

export function DeleteButton({ updateContactsInLocalStorage, setContactsList, id }) {
	function deleteContact(id) {
		setContactsList((prev) => {
			const updatedContactsList = prev.filter((el) => el.id !== id);
			updateContactsInLocalStorage(updatedContactsList);
			return updatedContactsList;
		});
	}
	return (
		<Button onClick={() => deleteContact(id)}>
			<TrashIcon />
		</Button>
	);
}
