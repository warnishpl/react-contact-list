import styled from 'styled-components';
import media from '../../styles/media';

export const ContactsWrapper = styled.div`
	min-width: 290px;
	grid-column: content-start / content-end;
	grid-row: content-mid / content-bottom;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	${media.lg`
		grid-column: content-mid / content-end;
		grid-row: header-bottom / content-bottom;
	`}
`;
