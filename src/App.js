import './App.css';
import addIcon from './assets/add-icon.svg';
import sortAzIcon from './assets/sort-ascending-letters.svg';
// import sortZaIcon from './assets/sort-descending-letters.svg';
import trashIcon from './assets/trash.svg';
import copyIcon from './assets/copy-plus.svg';
// import copyDoneIcon from './assets/copy-check.svg';

const contactsList = [
	{
		name: 'kacper',
		surname: 'kowalski',
		tel: "+48 796 152 114",
	},
	{
		name: 'adam',
		surname: 'milczek',
		tel: "+48 602 553 153",
	},
	{
		name: 'anna',
		surname: 'adamska',
		tel: '+48 533 159 446',
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
					<ContactItem personalData={element} key={element.surname} />
				))}
			</div>
		</>
	);
}
const ContactItem = ({ personalData }) => {
	const { name, surname, tel } = personalData;
	return (
		<div class='contact-item'>
			<div class='first-line'>
				<div class='contact-name'>
					<p>{name} {surname}</p>
				</div>
				<div class='delete-button'>
					<button>
						<img src={trashIcon} alt='usuń kontakt' />
					</button>
				</div>
			</div>
			<div class='second-line'>
				<div class='contact-number'>
					<p>{tel}</p>
				</div>
				<div class='copy-button'>
					<button>
						<img src={copyIcon} alt='skopiuj numer' />
					</button>
				</div>
			</div>
		</div>
	);
};


export default App;
