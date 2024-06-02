import { Button } from './SaveButton.styled.js';

export function SaveButton({ onClick, ...props }) {
	return (
		<Button onClick={onClick} {...props}>
			Zapisz
		</Button>
	);
}
