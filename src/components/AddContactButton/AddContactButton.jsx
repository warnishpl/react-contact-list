import { ReactComponent as AddIcon } from '../../assets/add-icon.svg';
import './AddContactButton.styles.css';

export function AddContactButton() {
	return (
		<>
			<div className='add-contact-button'>
				<button>
					<AddIcon />
				</button>
			</div>
		</>
	);
}
