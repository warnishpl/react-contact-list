import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import './DeleteButton.styles.css';

export function DeleteButton() {
	return (
		<>
			<div className='delete-button'>
				<button>
					<TrashIcon />
				</button>
			</div>
		</>
	);
}
