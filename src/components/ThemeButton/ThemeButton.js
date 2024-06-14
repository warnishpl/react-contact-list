import { Button } from './ThemeButton.styles.js';

export function ThemeButton({theme, setTheme, }) {
    const handleTheme = () => {
		setTheme(theme === 'blue' ? 'blueDark' : 'blue');
	};
	return <Button onClick={()=>handleTheme}>Theme Switch</Button>;
}
