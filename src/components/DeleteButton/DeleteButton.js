import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import { setLocalStorgeValue } from '../../utils/functions/localStorageFunctions.js';
import './DeleteButton.styles.js';
import { Button } from './DeleteButton.styles.js';

export function DeleteButton({setContactsList, id }) {
	function deleteContact(id) {
		setContactsList((prev) => {
			const updatedContactsList = prev.filter((el) => el.id !== id);
			setLocalStorgeValue('contacts', updatedContactsList);
			return updatedContactsList;
		});
	}
	return (
		<Button onClick={() => deleteContact(id)}>
			<TrashIcon />
		</Button>
	);
}
