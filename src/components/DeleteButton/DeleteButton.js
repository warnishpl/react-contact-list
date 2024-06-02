import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import './DeleteButton.styles.js';
import { Button } from './DeleteButton.styles.js';

export function DeleteButton({ updateLocalStorage, setContactsList, id }) {
	function deleteContact(id) {
		console.log(id);
		setContactsList((prev) => {
			const updatedTasksList = prev.filter((el) => el.id !== id);
			updateLocalStorage(updatedTasksList);
			return updatedTasksList;
		});
	}
	return (
		<Button onClick={() => deleteContact(id)}>
			<TrashIcon />
		</Button>
	);
}
