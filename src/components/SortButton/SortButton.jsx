import { ReactComponent as SortAzIcon } from '../../assets/sort-ascending-letters.svg';
// import { ReactComponent as SortZaIcon } from '../../assets/sort-descending-letters.svg';
import './SortButton.styles.css';

export function SortButton() {
	return (
		<>
			<div className='contacts-header-sorting-button'>
				<button>
					<SortAzIcon />
				</button>
			</div>
		</>
	);
}
