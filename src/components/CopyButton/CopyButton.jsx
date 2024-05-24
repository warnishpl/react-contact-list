import { ReactComponent as CopyIcon } from '../../assets/copy-plus.svg';
// import {ReactComponent as CopyDoneIcon } from '../../assets/copy-check.svg';
import './CopyButton.styles.css'

export function CopyButton() {
	return (
		<>
			<div className='copy-button'>
				<button>
					<CopyIcon />
				</button>
			</div>
		</>
	);
}
