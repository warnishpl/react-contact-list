import { createContext, useState } from 'react';

export const NameContext = createContext({
	name: '',
	setName: () => {},
});

export const NameContextProvider = ({ children }) => {
	const [name, setName] = useState('marsyia');

	return (
		<NameContext.Provider
			value={{
				name,
				setName,
			}}
		>
			{children}
		</NameContext.Provider>
	);
};
