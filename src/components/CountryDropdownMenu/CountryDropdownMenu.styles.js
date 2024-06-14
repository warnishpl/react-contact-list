import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	top: 50px;
	display: flex;
	height: 200px;
	width: 250px;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.background};
	overflow: auto;
`;
export const Button = styled.button`
	width: 100%;
	display: flex;
	justify-content: left;
	align-items: center;
	&:hover {
		background-color: ${({ theme }) => theme.colors.inputBackground};
	}
`;
export const Img = styled.img`
	height: 20px;
	aspect-ratio: 1.5;
`;
export const P = styled.p`
	margin-left: 10px;
	text-align: start;
	color: ${({ theme }) => theme.colors.text};
`;
