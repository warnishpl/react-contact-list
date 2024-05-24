import addIcon from '../assets/add-icon.svg';

export function AddContactButton() {
	return (
		<>
			<div className='add-contact-button'>
				<button>
					<img src={addIcon} alt='dodaj kontakt' />
				</button>
			</div>
		</>
	);
}
