import styled from 'styled-components';
import media from '../../styles/media';


export const Wrapper = styled.div`
	display: flex;
	height: 70px;
	grid-row: content-top / header-top;
	grid-column: content-mid / content-end;
	background-color: ${({ theme }) => theme.colors.background};
	${media.lg`
		grid-row: content-top / content-mid;
		grid-column: content-start / content-mid;
		justify-self: center;
	`}
`;
export const Button = styled.button`
	display: flex;
	height: 60px;
	width: 60px;
	align-self: end;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.button};
	transition: background-color 0.3s ease;
	${media.lg`
		width: 170px;
		justify-content: space-evenly;
		&:hover {
			background-color: ${({ theme }) => theme.colors.buttonHover};
		}
	`}
`;
export const P = styled.p`
	display: none;
	${media.lg`
		display: flex;
	`}
`;
