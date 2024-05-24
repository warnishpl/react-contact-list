import { SortButton } from '../../components/SortButton/SortButton.jsx';
import './ContactsHeader.styles.css';

export function ContactsHeader() {
	return (
		<div className='contacts-header-container'>
			<div className='contacts-header'>
				<h1>Moje kontakty</h1>
			</div>
			<SortButton />
		</div>
	);
}
