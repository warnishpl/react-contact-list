import React, { useState } from 'react';
import { Select, Option } from './ThemePicker.styles.js';
import { blue, blueDark, green, greenDark } from '../../styles/theme.js';

const themes = {
	blue,
	blueDark,
	green,
	greenDark,
};

export function ThemePicker({
	setTheme,
	updateThemeInLocalStorage,
	updateThemeNameInLocalStorage,
}) {
	const [selectedTheme, setSelectedTheme] = useState('default');

	return (
		<Select
			value={selectedTheme}
			onChange={(e) => {
				const newTheme = e.target.value;
				setSelectedTheme(newTheme);
				setTheme(themes[newTheme]);
				updateThemeInLocalStorage(themes[newTheme]);
				updateThemeNameInLocalStorage(newTheme);
				setSelectedTheme('default');
			}}
		>
			<Option value='default' disabled>
				Obecna skórka: {localStorage.getItem('themeName')}
			</Option>
			{Object.keys(themes).map((themeName) => (
				<Option key={themeName} value={themeName}>
					{themeName}
				</Option>
			))}
		</Select>
	);
}
