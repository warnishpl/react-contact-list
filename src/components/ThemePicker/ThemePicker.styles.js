import styled from 'styled-components';

export const Select = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;

export const Option = styled.div`
	padding: 10px;
	background-color: ${({ theme }) => theme.colors.itemBackground};
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.colors.inputBorder};
	border-radius: 4px;
	&:hover {
		background-color: ${({ theme }) => theme.colors.itemBackgroundHover};
	}
`;
