import { useContext } from 'react';
import { ReactComponent as SortAzIcon } from '../../assets/sort-ascending-letters.svg';
import { ReactComponent as SortZaIcon } from '../../assets/sort-descending-letters.svg';
import { ButtonWrapper, Button } from './SortButton.styles.js';
import { isAscendingContext } from '../../context/isAscendingContext.js';

export function SortButton() {
	const isAscendingContextValue = useContext(isAscendingContext);
	return (
		<ButtonWrapper
			onClick={() => isAscendingContextValue.setIsAscending((prev) => !prev)}
		>
			<Button>
				{isAscendingContextValue.isAscending ? <SortZaIcon /> : <SortAzIcon />}
			</Button>
		</ButtonWrapper>
	);
}
