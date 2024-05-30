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

export const Background = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 0;
	@media (min-width: 992px) {
		display: none;
	}
`;
export const AddContactFormWrapper = styled.div`
	position: fixed;
	display: flex;
	bottom: 50%;
	left: 50%;
	transform: translate(-50%, +50%);
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	@media (min-width: 992px) {
		transform: translate(-50%, 0);
		left: 280px;
		bottom: 10vh;
	}
`;

export const AddContactBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 80vw;
	height: 80vh;
	padding: 20px;
	border-radius: 20px;
	background-color: white;
	z-index: 2;
	justify-content: space-between;
	align-items: center;
	transition: background-color 0.3s ease;

	@media (min-width: 576px) {
		width: 400px;
		min-height: 370px;
		height: 50vh;
		background-color: #f7f7f7;
		&:hover,
		&:focus-within {
			background-color: #ebebeb;
		}
	}
`;
export const IconWrapper = styled.div`
	position: absolute;
	left: 30px;
	top: 35px;
	@media (min-width: 992px) {
		display: none;
	}
`;
export const Header = styled.div`
	display: flex;
	width: 100%;
	padding-top: 20px;
	justify-content: center;

	p {
		font-size: 16px;
		font-weight: bold;
	}
`;
export const InputsWrapper = styled.div``;
export const InputTitle = styled.div`
	font-size: 14px;
	padding: 20px 0 5px 0;
	p {
		padding-left: 10px;
	}
`;
export const Input = styled.input`
	border-radius: 10px;
	width: 240px;
	height: 50px;
	padding-left: 20px;
	padding-right: 20px;
	border: 1px solid #878787;
	background-color: #f8f8f8;
	&:focus {
		border: none;
		outline: 1px solid #6cc8fb;
	}
`;
