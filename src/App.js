import './App.css';
import addIcon from './assets/add-icon.svg';
import sortAzIcon from './assets/sort-ascending-letters.svg';
// import sortZaIcon from './assets/sort-descending-letters.svg';
import trashIcon from './assets/trash.svg';
import copyIcon from './assets/copy-plus.svg';
// import copyDoneIcon from './assets/copy-check.svg';

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
			<div class='main'>
				<div class='search-container'>
					<div class='search-field'>
						<input
							type='search'
							id='search-contact'
							placeholder='Wyszukaj kontakt'
						/>
					</div>
					<div class='add-contact-button'>
						<button>
							<img src={addIcon} alt='dodaj kontakt' />
						</button>
					</div>
				</div>

				<div class='contacts-container'>
					<div class='contacts-header-container'>
						<div class='contacts-header'>
							<h1>Moje kontakty</h1>
						</div>
						<div class='contacts-header-sorting-button'>
							<button>
								<img src={sortAzIcon} alt='sortuj liste od a do z' />
							</button>
						</div>
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
			<div class='contact-items'>
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
		<div class='contact-item'>
			<div class='picture'>
				<img src={picture} alt='zdjęcie profilowe'></img>
			</div>
			<div class='personal-data'>
				<div class='first-line'>
					<div class='contact-name'>
						<p>{name}</p>
					</div>
					<div class='delete-button'>
						<button>
							<img src={trashIcon} alt='usuń kontakt' />
						</button>
					</div>
				</div>
				<div class='second-line'>
					<div class='contact-number'>
						<p>{phone}</p>
					</div>
					<div class='copy-button'>
						<button>
							<img src={copyIcon} alt='skopiuj numer' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
