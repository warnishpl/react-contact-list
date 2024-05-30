import { useState } from 'react';
import { ReactComponent as CopyIcon } from '../../assets/copy-plus.svg';
import { ReactComponent as CopyDoneIcon } from '../../assets/copy-check.svg';
import { ButtonWrapper, Button } from './CopyButton.styles.js';

export function CopyButton({ textToCopy }) {
	const [isCopied, setIsCopied] = useState(false);

	function copy() {
		navigator.clipboard.writeText(textToCopy).then(() => {
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 1000);
		});
	}

	return (
		<ButtonWrapper>
			<Button onClick={copy}>{isCopied ? <CopyDoneIcon /> : <CopyIcon />}</Button>
		</ButtonWrapper>
	);
}
