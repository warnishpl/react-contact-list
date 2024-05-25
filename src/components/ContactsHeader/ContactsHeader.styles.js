import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	display: flex;
	margin: 10px 0;
	padding-left: 10px;
	align-items: center;
	justify-content: space-between;
	font-size: 14px;
	background-color: #fff;
	grid-row: header-top / header-bottom;
	grid-column: content-start / content-end;
	@media (min-width: 992px) {
		grid-row: header-top / header-bottom;
		grid-column: content-mid / content-end;
	}
`;
export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;
