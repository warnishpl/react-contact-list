import sortAzIcon from '../assets/sort-ascending-letters.svg';
// import sortZaIcon from './assets/sort-descending-letters.svg';

export function SortButton() {
	return (
		<>
			<div className='contacts-header-sorting-button'>
				<button>
					<img src={sortAzIcon} alt='sortuj liste od a do z' />
				</button>
			</div>
		</>
	);
}
