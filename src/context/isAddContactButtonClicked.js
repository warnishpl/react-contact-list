import { createContext, useState } from 'react';

export const AddContactButtonContext = createContext({
	isAddContactButtonClicked: false,
	setIsAddContactButtonClicked: () => {},
	handleAddContactButtonClick: () => {},
});

export const AddContactButtonProvider = ({ children }) => {
	const [isAddContactButtonClicked, setIsAddContactButtonClicked] =
		useState(false);
	const handleAddContactButtonClick = () => {
		setIsAddContactButtonClicked(!isAddContactButtonClicked);
	};
	return (
		<AddContactButtonContext.Provider
			value={{
				isAddContactButtonClicked,
				setIsAddContactButtonClicked,
				handleAddContactButtonClick,
			}}
		>
			{children}
		</AddContactButtonContext.Provider>
	);
};
