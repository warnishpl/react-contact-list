import styled from 'styled-components';
import media from '../../styles/media';

export const Background = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.backgroundTransparent};
	z-index: 0;
	${media.lg`
	display: none;
	`}
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
	${media.lg`
		position: static;
		grid-row: header-bottom / content-bottom;
		grid-column: content-start / content-mid;
		transform: translate(0, 0);
	`}
`;

export const AddContactBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 80vw;
	height: 80vh;
	padding: 20px;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.itemBackground};
	z-index: 2;
	justify-content: space-between;
	align-items: center;
	min-height: 340px;
	transition: background-color 0.3s ease;
	${media.sm`
		align-self: flex-start;
		width: 400px;
		min-height: 370px;
		height: 50vh;
	`}
`;
export const IconWrapper = styled.div`
	${media.lg`
	display: none;
	`}
`;
export const Header = styled.div`
	width: 100%;
	padding: 20px ;
	justify-content: center;
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	align-items: center;

	p {
		font-size: 16px;
		font-weight: bold;
	}
	${media.lg`
	grid-template-columns: auto;
	`}
`;
export const InputsWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const InputTitle = styled.div`
	align-self: start;
	font-size: 14px;
	padding: 20px 0 5px 0;
	p {
		padding-left: 10px;
	}
`;
export const ImgInput = styled.input`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.inputBorder};
`;
export const Input = styled.input`
	border-radius: 10px;
	width: 240px;
	height: 50px;
	padding-left: 20px;
	padding-right: 20px;
	border: 1px solid ${({ theme }) => theme.colors.inputBorder};
	background-color: ${({ theme }) => theme.colors.background};
	transition: background-color 0.3s ease;
	&:focus {
		border: none;
		outline: 1px solid ${({ theme }) => theme.colors.inputOutline};
		background-color: ${({ theme }) => theme.colors.inputBackground};
	}
`;
