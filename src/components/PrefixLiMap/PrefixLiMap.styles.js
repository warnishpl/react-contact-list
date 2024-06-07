import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	top: 50px;
	background-color: ${({ theme }) => theme.colors.background};
	height: 100px;
	width: 250px;
	overflow: auto;
`;
export const Li = styled.li`
	width: 100%;
`;
