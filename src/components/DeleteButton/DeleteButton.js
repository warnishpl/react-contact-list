import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import './DeleteButton.styles.js';
import { Button } from './DeleteButton.styles.js';

export function DeleteButton({ onClick }) {
	return (
		<Button onClick={onClick}>
			<TrashIcon />
		</Button>
	);
}
