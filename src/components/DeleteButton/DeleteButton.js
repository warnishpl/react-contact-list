import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import './DeleteButton.styles.js';
import { ButtonWrapper, Button } from './DeleteButton.styles.js';

export function DeleteButton() {
	return (
		<ButtonWrapper>
			<Button>
				<TrashIcon />
			</Button>
		</ButtonWrapper>
	);
}
