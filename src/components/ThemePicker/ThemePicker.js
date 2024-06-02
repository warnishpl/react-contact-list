import { useState } from 'react';
import { Select, Option } from './ThemePicker.styles.js';
import { blue, blueDark, green, greenDark } from '../../styles/theme.js';

const themes = {
	blue,
	blueDark,
	green,
	greenDark,
};

export function ThemePicker() {
	const [theme, setTheme] = useState(themes.blue);

	function handleTheme(themeName) {
		setTheme(themes[themeName] || themes.blue);
	}

	return (
		<Select>
			{Object.keys(themes).map((themeName) => (
				<Option key={themeName} onClick={() => handleTheme(themeName)}>
					{themeName}
					
				</Option>
			))}
		</Select>
	);
}
