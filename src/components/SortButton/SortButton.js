import { ReactComponent as SortAzIcon } from '../../assets/sort-ascending-letters.svg';
import { ReactComponent as SortZaIcon } from '../../assets/sort-descending-letters.svg';
import { ButtonWrapper, Button } from './SortButton.styles.js';

export function SortButton({ setIsAscending, isAscending }) {

	return (
		<ButtonWrapper onClick={() => setIsAscending(!isAscending)}>
			<Button>
				{!isAscending && <SortAzIcon />}
				{isAscending && <SortZaIcon/>}
			</Button>
		</ButtonWrapper>
	);
}
