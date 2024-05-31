import styled, { css} from 'styled-components';

export const mediaStyles = css`
	@media (min-width: 992px) {
		grid-row: content-top / content-mid;
		grid-column: content-start / content-mid;
		justify-self: center;

		button {
			width: 170px;
			justify-content: space-evenly;
		}
		button:hover {
			background-color: #9fd5fc;
		}
		p {
			display: flex;
		}
	}
`;
export const Wrapper = styled.div`
	position: sticky;
	display: flex;
	top: 0px;
	height: 70px;
	grid-row: content-top / header-top;
	grid-column: content-mid / content-end;
	background-color: #fff;
	${mediaStyles}
`;
export const Button = styled.button`
	display: flex;
	height: 60px;
	width: 60px;
	align-self: end;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	background-color: #b6e4fd;
	transition: background-color 0.3s ease;
`;
export const P = styled.p`
	display: none;
`;

