import styled from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
    bottom: 31px;
	background-color: ${({ theme }) => theme.colors.background};
	height: 100px;
	width: 250px;
	overflow: auto;
`;
export const Li = styled.li`
	width: 100%;
`;
