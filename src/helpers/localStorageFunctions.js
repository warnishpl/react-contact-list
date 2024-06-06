export function updateContactsInLocalStorage(arr) {
    localStorage.setItem('contacts', JSON.stringify(arr));
}
export function updateThemeInLocalStorage(theme) {
    localStorage.setItem('theme', JSON.stringify(theme));
}
export function updateThemeNameInLocalStorage(themeName) {
    localStorage.setItem('themeName', JSON.stringify(themeName));
}