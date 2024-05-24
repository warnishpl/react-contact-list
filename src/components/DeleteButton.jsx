import trashIcon from '../assets/trash.svg';

export function DeleteButton() {
	return (
		<>
			<div className='delete-button'>
				<button>
					<img src={trashIcon} alt='usuń kontakt' />
				</button>
			</div>
		</>
	);
}
