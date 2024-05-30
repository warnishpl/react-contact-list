import { createGlobalStyle, styled } from 'styled-components';

export const SetGlobalStyle = createGlobalStyle`/* reset */
*,
*::after,
*::before {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
html,
body {
	height: 100%;
}
html {
	font-size: 62.5%;
	scroll-behavior: smooth;
}
a {
	text-decoration: none;
}
img {
	height: auto;
}
input,
button,
textarea,
select {
	font-family: inherit;
}
button {
	border: none;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0);
}
textarea {
	resize: vertical;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* reset */
`;

export const Main = styled.main`
	display: grid;
	grid-template-columns: [margin-left] 30px [content-start] 1fr [content-mid] auto [content-end] 30px [margin-right];
	grid-template-rows: [margin-top] 30px [content-top] 70px [header-top] auto [header-bottom] auto [content-mid] 1fr [content-bottom] 30px [margin-bottom];
	min-width: 350px;

	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: [margin-left] 30px [content-start] 500px [content-mid] minmax(400px,auto) [content-end] minmax(50px, auto) [margin-right];
		grid-template-rows: [margin-top] 30px [content-top] 70px [header-top] auto [header-bottom] auto [content-mid] 1fr [content-bottom] 30px [margin-bottom];
	}
`;
