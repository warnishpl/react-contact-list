import trashIcon from '../assets/trash.svg';

export function DeleteButton() {
	return (
		<>
			<div class='delete-button'>
				<button>
					<img src={trashIcon} alt='usuń kontakt' />
				</button>
			</div>
		</>
	);
}
