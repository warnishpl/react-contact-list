import { ReactComponent as SortAzIcon } from '../../assets/sort-ascending-letters.svg';
// import { ReactComponent as SortZaIcon } from '../../assets/sort-descending-letters.svg';
import { ButtonWrapper, Button } from './SortButton.styles.js';

export function SortButton() {
	return (
		<ButtonWrapper>
			<Button>
				<SortAzIcon />
			</Button>
		</ButtonWrapper>
	);
}
