import './App.css';

import { CopyButton } from './components/CopyButton.jsx';
import { DeleteButton } from './components/DeleteButton.jsx';
import { AddContactButton } from './components/AddContactButton.jsx';
import { SortButton } from './components/SortButton.jsx';
import { SearchInput } from './components/SearchInput.jsx';

const contactsList = [
	{
		name: 'Ayla Meland',
		phone: '21763438',
		picture: 'https://randomuser.me/api/portraits/med/women/41.jpg',
	},
	{
		name: 'Emma Kuusisto',
		phone: '08-489-046',
		picture: 'https://randomuser.me/api/portraits/med/women/67.jpg',
	},
	{
		name: 'Siddharth Bangera',
		phone: '8462139119',
		picture: 'https://randomuser.me/api/portraits/med/men/37.jpg',
	},
	{
		name: 'Olesya Kapustyanskiy',
		phone: '(066) C90-6270',
		picture: 'https://randomuser.me/api/portraits/med/women/59.jpg',
	},
	{
		name: 'Ruby Li',
		phone: '(350)-806-8254',
		picture: 'https://randomuser.me/api/portraits/med/women/76.jpg',
	},
	{
		name: 'Ingo Cardoso',
		phone: '(64) 6321-4208',
		picture: 'https://randomuser.me/api/portraits/med/men/26.jpg',
	},
	{
		name: 'Ria da Conceição',
		phone: '(15) 7772-6293',
		picture: 'https://randomuser.me/api/portraits/med/women/90.jpg',
	},
	{
		name: 'Paola Melo',
		phone: '(42) 9146-3180',
		picture: 'https://randomuser.me/api/portraits/med/women/23.jpg',
	},
	{
		name: 'Kathy Watts',
		phone: '031-363-8332',
		picture: 'https://randomuser.me/api/portraits/med/women/27.jpg',
	},
	{
		name: 'علی نجاتی',
		phone: '066-76025733',
		picture: 'https://randomuser.me/api/portraits/med/men/3.jpg',
	},
];

function App() {
	return (
		<>
			<div className='main'>
				<div className='search-container'>
					<SearchInput />
					<AddContactButton />
				</div>

				<div className='contacts-container'>
					<div className='contacts-header-container'>
						<div className='contacts-header'>
							<h1>Moje kontakty</h1>
						</div>
						<SortButton />
					</div>
					<ContactItems />
				</div>
			</div>
		</>
	);
}

function ContactItems() {
	return (
		<>
			<div className='contact-items'>
				{contactsList.map((element) => (
					<ContactItem personalData={element} key={element.name} />
				))}
			</div>
		</>
	);
}
const ContactItem = ({ personalData }) => {
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

export default App;
