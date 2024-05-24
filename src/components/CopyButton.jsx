import copyIcon from '../assets/copy-plus.svg';
// import copyDoneIcon from './assets/copy-check.svg';

export function CopyButton() {
	return (
		<>
			<div class='copy-button'>
				<button>
					<img src={copyIcon} alt='skopiuj numer' />
				</button>
			</div>
		</>
	);
}
