import { ReactComponent as CopyIcon } from '../../assets/copy-plus.svg';
// import {ReactComponent as CopyDoneIcon } from '../../assets/copy-check.svg';
import { ButtonWrapper, Button } from './CopyButton.styles.js';

export function CopyButton() {
	return (
		<ButtonWrapper>
			<Button>
				<CopyIcon />
			</Button>
		</ButtonWrapper>
	);
}
