import { CopyButton } from '../../components/CopyButton/CopyButton.jsx';
import { DeleteButton } from '../../components/DeleteButton/DeleteButton.jsx';
import './ContactItem.styles.css';

export const ContactItem = ({ personalData }) => {
	const { name, phone, picture } = personalData;
	return (
		<div className='contact-item'>
			<div className='picture'>
				<img src={picture} alt='zdjęcie profilowe'></img>
			</div>
			<div className='personal-data'>
				<div className='first-line'>
					<div className='contact-name'>
						<p>{name}</p>
					</div>
					<DeleteButton />
				</div>
				<div className='second-line'>
					<div className='contact-number'>
						<p>{phone}</p>
					</div>
					<CopyButton />
				</div>
			</div>
		</div>
	);
};
