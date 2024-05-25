import styled from 'styled-components';

export const ContactsWrapper = styled.div`
	min-width: 290px;
	grid-column: content-start / content-end;
	grid-row: content-mid / content-bottom;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 992px) {
		grid-column: content-mid / content-end;
		grid-row: header-bottom / content-bottom;
	}
`;
